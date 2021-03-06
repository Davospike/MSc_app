import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "../../../styles/About";
import TextWrapper from "../../../components/UI/Text/TextWrapper";
import Colours from "../../../../config/colours.json";
import ImageWrapper from "../../../components/UI/ImageWrapper";
import { events, logEvent } from "../../../helpers/amplitude";

export default SecurityCloud = (props) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TextWrapper reg style={styles.bodyText}>
          The ‘cloud’ consists of computers that are accessible using the
          internet and software that runs on those computers and provides
          different services. Some of the Apps that you might already use are
          built using cloud services, for example, Facebook, Twitter, LinkedIn,
          Skype, WhatsApp, DropBox and Google Drive.
        </TextWrapper>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ImageWrapper
            source={require("../../../images/encrypted.png")}
            style={styles.mainLogo}
            widthScalar={0.7}
            heightScalar={0.55}
          />
        </View>
        <TextWrapper reg style={styles.bodyText}>
          We use two different cloud services in the CHIME App. Firebase is used
          to keep your data secure and Amplitude is used to collect the usage
          data.
          {"\n\n"}
          All communications between the App and cloud services are encrypted,
          ensuring your personal data is protected while in transit. All data is
          encrypted when it is stored using the cloud services.
          {"\n\n"}
          <TextWrapper
            med
            onPress={() => {
              logEvent(events.privacy.privacy_nav_cloud_services_firebase);
              props.navigation.navigate("FirebaseService");
            }}
            style={{ ...styles.tableItemHeader, color: Colours.primary }}
          >
            Firebase
            {"\n\n"}
          </TextWrapper>
          Firebase is used in this application to protect user data and ensure
          that only the intended user can access it. 
          {"\n\n"}
          <TextWrapper bold>What is stored</TextWrapper>
          {"\n"}
          Your username (personal email) and encrypted password are stored to
          ensure only you can access the App and the data you have tracked.
        </TextWrapper>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ImageWrapper
            source={require("../../../images/firebase_service.png")}
            style={styles.mainLogo}
            widthScalar={0.5}
            heightScalar={0.6}
          />
        </View>
        <TextWrapper reg style={styles.bodyText}>
          <TextWrapper
            med
            onPress={() => {
              logEvent(events.privacy.privacy_nav_cloud_services_amplitude);
              props.navigation.navigate("AmplitudeService");
            }}
            style={{ ...styles.tableItemHeader, color: Colours.primary }}
          >
            Amplitude
            {"\n\n"}
          </TextWrapper>
          Amplitude is used to store and analyse data about how you use the App
          in order to improve the design of the App.{"\n\n"}{" "}
          <TextWrapper bold>What is stored</TextWrapper>
          {"\n"}
          User ID, usage data – we store when you use different functionality in
          the App but do not record any of the personal data you track. All
          stored data is encrypted. The User ID is randomly generated by your
          phone and we do not know whose phone it is linked to. This means that
          your usage data is anonymous.
        </TextWrapper>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ImageWrapper
            source={require("../../../images/amplitude_service.png")}
            style={styles.mainLogo}
            widthScalar={0.5}
            heightScalar={0.6}
          />
        </View>
      </View>
    </ScrollView>
  );
};
