# Web Browser Phone
Call your friends from anywhere at anytime with this a web browser phone application made using PeerJS and hosted using Surge. Follow the steps below to see how it works!

## Steps
Begin by generating an ID on the browser you want to call
![GitHub Logo](/images/genID.png)

Open up another browser and enter the ID into the text field
![GitHub Logo](/images/callID.png)

Enable the mic on both browsers
![GitHub Logo](/images/call.png)

Enjoy the call!

Check out the [demo](https://sassy-event.surge.sh/) (make sure to disable script blockers)

## Flow of Program

Flow chart:

```mermaid
graph LR
A{Browser 1: </br> Generates ID} -- Passes ID--> B{Diamond}
B{Browser 2: </br> Enters ID} --Makes Call--> A

```
