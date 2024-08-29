import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        System.out.println("WELCOME TO THE IDENTIFICATION QUIZ!");
        String num1 = "1. Who is the first ever programmer? HINT: It's a girl"
                +("\nA. Ada Lovelace\nB. Michael Jackson\nC. Charles Babbage\nD. Hillary Clinton");
        String num2 = "2. What is the brain of a computer? HINT: only three letters";
        String num3 = "3. G-mail and YouTube belong to this company";
        String num4 = "4. A computer that is portable and suitable for use while travelling HINT: portability";
        String num5 = "5. The operating system of Apple Phones HINT: Three letters";
        String num6 = "6. Computers use this number system to store data and perform calculations HINT: It's composed of two numbers";
        String num7 = "7. First page of the website HINT: It ends with .html"
                +("\nA.) info.html\nB.) index.html\nC.) home.html\nD.) about.html");
        String num8 = "8. Which leading computer software business created programs like Spread Sheet, Word and Power point?";
        String num9 = "9. What does \"www\" stand for?";
        String num10 = "10. Who created Apple and died October 5th 2011?";
        String num11 = "11. What operating system is owned by microsoft?";
        String num12 = "12. What does USB stand for?";
        String num13 = "13. Which part of the computer system are the ones that you can physically touch?";
        String num14 = "14. What company invented the MAC operating system?";
        String num15 = "15. Who is known as the father of computers?"
                +("\nA.) Larry Page\nB.) Steve Jobs\nC.) Charles Babbage\nD.) Michael Jackson");
        String num16 = "16. Which popular company designed the first CPU?";
        String num17 = "17. What is the computer's main circuit board called?";
        String num18 = "18. Which input device is used to enter letters, numbers, and other characters into a computer?";
        String num19 = "19. 'Laser', 'Dot Matrix' and 'Inkjet' are types of which output computer device?"
                +("\nA.) Printer\nB.) mouse\nC.) Headphone\nD.) Webcam");
        String num20 = "20. Which computer company invented the first floppy disks, hard disk drives, and DRAMS?"
                +("\nA.) Apple\nB.) Starbucks\nC. SanDisk\nD. IBM");

        Questions [] questions = {
                new Questions(num1,"a"),
                new Questions(num2,"cpu"),
                new Questions(num3,"google"),
                new Questions(num4,"laptop"),
                new Questions(num5,"ios"),
                new Questions(num6,"binary number system"),
                new Questions(num7,"b"),
                new Questions(num8,"microsoft"),
                new Questions(num9,"world wide web"),
                new Questions(num10,"steve jobs"),
                new Questions(num11,"windows"),
                new Questions(num12,"universal serial bus"),
                new Questions(num13,"hardware"),
                new Questions(num14,"apple"),
                new Questions(num15,"c"),
                new Questions(num16,"intel corporations"),
                new Questions(num17,"motherboard"),
                new Questions(num18,"keyboard"),
                new Questions(num19,"a"),
                new Questions(num20,"d"),



        };
        theTest(questions);
    }


    public static void theTest(Questions [] questions){
        Scanner scan = new Scanner (System.in);
        System.out.println("----------------------------");
        int score = 0;
        for(int i = 0; i < questions.length; i++){
            System.out.println(questions[i].quest);
            String answer = scan.nextLine().toLowerCase();
            if(answer.equals(questions[i].answer)){
                System.out.println("Correct!");
                score++;
            }
            else{
                System.out.println("Wrong!");
            }
            System.out.println("----------------------------");
        }
        System.out.println("Your score is " + score+"/" +questions.length);
    }
}