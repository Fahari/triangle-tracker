#   TRIANGLE-TRACKER
#### A program that evaluates what kind of triangle is formed from a set of given values.
3rd/December/2018
#### Author
 KIRONJI KEVIN
## Description
The Triangle-tracker is essentially a program that is able to classify triangles based solely on the length of the sides provided. It achieves this ability by using Control Flows i.e IF, IF-ELSE, ELSE statements and Logic Operators i.e ===, >, <, &&, ||, etc. that are strategically placed to follow a logic structure that makes it a powerful tool, and yet keeping it simple enough to use.
A user feeds it values through the input fields, and it evaluates the values into categories of EQUILATERAL, SCALENE, ISOSCELES or NOT a triangle at all.
This is a snap of what to expect from the program.
![Image] (https://github.com/Fahari/triangle-tracker/blob/master/images/triangle-tracker.png)

### Prerequisites
You need to have git installed.
You can install git using the following command in your terminal $ sudo apt install git-all -y
### Setup
1. Open your terminal
2. Use this command $ git clone https://github.com/Fahari/triangle-tracker
   This will clone the projects repository into a local folder on your device.
3. Open the files with an editor( preferably Atom. )   
4. Study the code. learn from it. Improve on it.
### Known Bugs
The program works seamlessly. However, on to the evaluation of "IS THE INPUT FIELD EMPTY?", it does so in a method I believe JavaScript uses to handle UNDEFINED & NULL values. If you look at the JavaScript code, you will realize that I have defined IF the input field is EMPTY or ONE FIELD IS EMPTY, print out "PLEASE FILL ALL THE FIELDS". ![Image] (https://github.com/Fahari/triangle-tracker/blob/master/images/bug1.png)


On testing this with empty values, it however prints out "PLEASE INPUT A NUMBER! ![Image] (https://github.com/Fahari/triangle-tracker/blob/master/images/bug22.png)

which is what it should print when ANYTHING BUT A NUMBER is used as input value. So, it automatically prints out the predefined output logic of another case scenario(WHEN ANYTHING BUT A NUMBER IS USED) rather than the case scenario(EMPTY INPUT FIELDS).
This has baffled me, but it seems to work.
### Technologies Used
1. Atom
2. HTML
3. CSS  
4. JavaScript
5. git

## Behavior Driven Development Process
| Behavior                         |  Input Example |  Output  Example                 |
|----------                                          |:-------------: |------:  |
| User inputs 3 EQUAL sides                   | 7,7,7         | This is an EQUILATERAL triangle  |
| User inputs 2 EQUAL sides                    | 7,7,8          | This is an ISOSCELES triangle  |
| User inputs NO equal side,(but the SUM of ANY 2 sides > the 3rd side)     | 3,4,5         | This is a SCALENE triangle |
| User inputs 1 field             | ,,3          | Please FILL ALL the fields!      |
| User inputs 2 fields            | ,4,5          | Please FILL ALL the fields!  |
| User inputs NO field            | ,,          | Please FILL ALL the fields!   |
| User inputs ANYTHING NOT a NUMBER  | @,$,5          | Please input a NUMBER! |
| When sum of any 2 sides is <= 3rd side | 9, 4,2   | That is NOT a triangle |

### Site  
You can access the live project at "#"

### Support and contact details
Have a question? Want to report a bug? feeling philanthropic? drop a suggestion or comment at
karonjekevin67@gmail.com
### License
This project is under the MIT license.
Feel free to study and use the code.
Copyright (c) 2018 **Kironji Kevin**
