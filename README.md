# A-Heat-Guided-Air-to-Air-Missile-Controller

This project relies primarily on the design process activities by combining some design methodologies studied in this college course: the COMET and Concurrent (Real-Time) UML methods. It implements a dashboard page for controlling missile settings and a sensor page for detecting changes. These two pages are created using HTML, CSS, JavaScript, TypeScript and Angular.

## description of the project
The missile contains a burner, a proximity trigger, a warhead, two sets of wings, yaw (i.e., left, right), pitch (i.e., up, down), a launch sensor, and an infra-red camera.

• An algorithm is available that transfers the infra-red image of the camera to the yaw and pitch angles of the target.

• Half a second after the missile is launched, the burner is activated, from then on, the burner remains active until
the missile explodes or an error is detected.

• The system uses its wings to aim the missile at the target. Each set of wings has five modes: Centered, Small
deviation (one to each of the two directions), and Strong deviation to each direction.

• The missile is armed 3 seconds after it is launched. The burner malfunction, or the camera losing the target, causes
the arming to be canceled and the burner to stop.

• If the missile is armed and the proximity detected is activated, the warhead explodes.


## Requirements modeling
### Activity Diagram for the main functions of the proposed system :
![image](https://github.com/Arwa0/-A-Heat-Guided-Air-to-Air-Missile-Controller/assets/74055031/d4fa588a-5bd1-4f4c-b2ed-eb73e15f7bbe)

## Static Analysis modeling
### Detailed class diagram
![image](https://github.com/Arwa0/-A-Heat-Guided-Air-to-Air-Missile-Controller/assets/74055031/174e6315-8451-4137-a156-7e9a643dde18)


## Dynamic Analysis modeling – This include:

### State Machine diagram.
![image](https://github.com/Arwa0/-A-Heat-Guided-Air-to-Air-Missile-Controller/assets/74055031/3d071475-ed64-44eb-9a04-47c6bc3429b6)

### Interaction diagram
-system Sequence :
![image](https://github.com/Arwa0/-A-Heat-Guided-Air-to-Air-Missile-Controller/assets/74055031/3a0b716d-69fc-4c47-bd03-bd280584afec)

-Sequence diagram:

* Detecting target:
  ![image](https://github.com/Arwa0/-A-Heat-Guided-Air-to-Air-Missile-Controller/assets/74055031/60881608-c528-4163-8d84-4423a42ba697)
  
* Is Launched
  ![image](https://github.com/Arwa0/-A-Heat-Guided-Air-to-Air-Missile-Controller/assets/74055031/28b632f4-4c59-4fa6-9827-b80fc08650cd)

* Change mode:
  ![image](https://github.com/Arwa0/-A-Heat-Guided-Air-to-Air-Missile-Controller/assets/74055031/ed2b221d-fb4d-402a-b0e5-fbea6346e345)

* Infrared camera:
  ![image](https://github.com/Arwa0/-A-Heat-Guided-Air-to-Air-Missile-Controller/assets/74055031/892cf782-3b66-4f74-b132-00b0cdfaea37)

* Set burner active:
   ![image](https://github.com/Arwa0/-A-Heat-Guided-Air-to-Air-Missile-Controller/assets/74055031/d74a46a1-0d0e-487a-8938-9320be8c52f7)

* Missile explodes:
    ![image](https://github.com/Arwa0/-A-Heat-Guided-Air-to-Air-Missile-Controller/assets/74055031/5a76f039-0199-4550-be2a-0d6e452a7612)

* Detecting target:
    ![image](https://github.com/Arwa0/-A-Heat-Guided-Air-to-Air-Missile-Controller/assets/74055031/1bdf466b-2eed-47b6-b54f-7d522935f5e8)
  
* Missile explodes:
    ![image](https://github.com/Arwa0/-A-Heat-Guided-Air-to-Air-Missile-Controller/assets/74055031/c9a7015b-1409-4033-a244-edd2b3c1a648)
