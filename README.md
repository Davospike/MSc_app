# INTUIT APP

## Start the app for the first time
1. clone repo
2. npm i
3. Open node_modules/react-native/Libraries/Core/Timers/JSTimers.js
4. Change line 47 so that is reads const MAX_TIMER_DURATION_MS = 10000 * 1000;
5. Expo start

## Features
1. Create trackers
  - Choose from Number, Tickbox and Category
  - Choose on what days they're shown
  - Choose what colour they will be
2. Track data
  - Record data to a tracker for the current day
  - Add image and text to the diary
  - Add comments to your tracked data
3. Show and hide your trackers
  - Hide sensitive trackers from appearing on your screen
4. Manage your trackers
  - Edit them
  - Delete them and their associated data

## Granular features per screen 
(to be used in accordance with the app flow diagram)
### Authentication
A.1 
- "Log in" button
  - Check input values and log user in if correct
- "FORGOT PASSWORD" button
  - Send a password reset email to the email in the "Email" field
- "Don't have an account?" button
  - Navigate to A.2
A.2
- "Sign up" button
  - Check input values and navigate to A.3
- "Already have an account" button
  - Navigate to A.1
A.3
- Slider
  - Should enable permission X
A.4 
- "Get started" button
  - Navigate to TR.1
  
### Me

TR.1
- Pencil button top right
  - Navigate to TR.6
- Burger button top left
  - Open drawer (TR.10)
- Scale card
  - Navigate to TR.2
- Numeric card
  - Navigate to TR.3
- Tickbox card
  - Navigate to TR.4
- Diary card
  - Navigate to TR.5
  
TR.2
- Back arrow top left
  - Navigate to TR.1
- Radio buttons
  - Change the comment to the assinged statement for the associated emoji
- Comment textbox
  - Contains the comment for the entered data
- Tick button
  - Record the data
  
TR.3
- Back arrow top left
  - Navigate to TR.1
- Numeric input
  - Only accepts numbers
- Comment textbox
  - Contains the comment for the entered data
- Tick button
  - Record the data
  
TR.4
- Back arrow top left
  - Navigate to TR.1
- Tickbox
  - The data related to the tracker
- Comment textbox
  - Contains the comment for the entered data
- Tick button
  - Record the data entry
  
TR.5
- Back arrow top left
  - Navigate to TR.1
- Diary entry textbox
  - Multiline textbox
- Add image switch
  - When enabled shows choose image button
- Choose image button
  - Opens camera roll, selected picture is shown
- Tick button
  - Record the data entry
  
TR.6
- Back arrow top left
  - Navigate to TR.1
- Title textbox
  - The title for the new tracker
- Tracker type radio buttons
  - Show the appropriate options as shown in TR.7-9
  
TR.7 
- Magnifying glass
  - Brings up emoji selection keyboard
- Scale option textbox
  - The statement that will be associated with the chosen emoji
- Tick button
  - Create tracker
- Frequency card
  - When selected the tracker will appear on these days
  
TR.8
- Units entry textbox
  - The numerical units for the number tracker
  
TR.9
- Tickbox prompt textbox
  - A text prompt that will appear when inputting tickbox data for that tracker
  
TR.10
- Cog button
  - Navigate to TR.11
- Tracker name tickbox
  - Pressing will toggle whether the tracker is shown in TR.1
  
TR.11
- Tracker edit button
  - Navigate to TR.6 with the tracker details filled in

### My Journey

MJ.1
- Calendar
  - Pressing on a day navigates you to MJ.9
  - Long-pressing a day will highlight it
  - Long-pressing two days will highlight a range
  - Given a range, three buttons appear
    - Cross button
      - Cancel the selection and unhighlight the days
    - Plus button
      - Create an annotation and navigate to MJ.8
    - Binoculars button
      - Navigate to MJ.7
- Annotation card
  - Pressing navigates to MJ.10
  
MJ.2-6
- Not implemented

MJ.7
- Graphs
  - Shows the data over the annotation time range
  - Range button
    - Changes the temporal resolution of the graph
- Plus button top right
  - Navigates to MJ.8 with the selected range
  
MJ.8
- Annotation title textbox
  - Textbox for the name of the annotation
- Annotation description textbox
  - Textbox for the description of the annotation
- Include tracker data
  - Tickbox for tracker data to be included in the annotation
- Colour card
  - Pressing a colour will add a tick to the colour and this is how the annotation will appear on the calendar
- Tick button
  - Pressing this will create the annotation
  
MJ.9
- Effectively the same functionality as TR.1

MJ.10
- Graphs
  - Shows the data over the annotation time range
  - Range button
    - Changes the temporal resolution of the graph
- Edit button top right
  - Edit the annotation, navigate to MJ.8
- Delete button top right
  - Deletes the annotation
  
  ### My Settings
  
  
