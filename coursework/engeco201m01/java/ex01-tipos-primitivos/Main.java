class Main {
    public static void main(String[] args) {
     
        int a =1;
        char b = 'a';
        double d = 1.0;
        float e = 1.0f;
        boolean g = true;
        
        String name = "a";

        //All that has a (is a method)
        name.toUpperCase();

        addExclamationPoint("hot dog");
        
    }
    //Creating a method
    public static String addExclamationPoint(String s) {
        return s + "!";
    }
}