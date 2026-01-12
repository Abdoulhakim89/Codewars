public class Kata {
  public static String rot13(String str) {
    String result = "";
        for(int i = 0; i < str.length(); i++){
            if(String.valueOf(str.charAt(i)).matches("[A-Za-z]+")){
                
            boolean cap = str.charAt(i) == Character.toUpperCase(str.charAt(i));
            int code = (int)Character.toLowerCase(str.charAt(i));
            int counter;
            if(code > 109){
                counter = 96+((code +13)-122) ;
            } else counter = code + 13;
            if(cap){
                result += Character.toUpperCase((char)counter);
            } else result += (char)counter;
            } else result += str.charAt(i);
            
        }
    return result;
  }
}