class Solution {
  
   public static String rot13(String message) {
String result = "";
        for(int i = 0; i < message.length(); i++){
            if(String.valueOf(message.charAt(i)).matches("[A-Za-z]+")){
                
            boolean cap = message.charAt(i) == Character.toUpperCase(message.charAt(i));
            int code = (int)Character.toLowerCase(message.charAt(i));
            int counter;
            if(code > 109){
                counter = 96+((code +13)-122) ;
            } else counter = code + 13;
            if(cap){
                result += Character.toUpperCase((char)counter);
            } else result += (char)counter;
            } else result += message.charAt(i);
            
        }  
     return result;
   }
}