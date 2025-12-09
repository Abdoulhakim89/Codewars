import java.util.*;
public class Kata {
  
  public static boolean isAValidMessage(String message) {
    
    String[] arrMsg = message.split("");
    boolean output = true;
    
    if(message.length() < 1) return output;
    if(!Character.isDigit(message.charAt(0))) return false;
    
      for(int i = 1; i < arrMsg.length-1; i++){
        if(!Character.isDigit(message.charAt(i)) && Character.isDigit(message.charAt(i +1))) arrMsg[i] += " ";
        if(!Character.isDigit(message.charAt(i)) && Character.isDigit(message.charAt(i -1))) arrMsg[i] = " " + arrMsg[i];   
      }
    arrMsg = String.join("", arrMsg).split(" ");
​
    for(int i = 0; i < arrMsg.length-1;i++){
      if( i%2 == 0 && Integer.valueOf(arrMsg[i]) != arrMsg[i+1].length()){
        output = false;
      }
    }
    if(message.length() > 1 && Character.isDigit(message.charAt(message.length()-1))) output = false;
    if(message.length() == 1 && message.charAt(0) != '0') output = false;
    
    return output;     
  }
}