package tj.online;

import java.io.*;
import java.nio.charset.StandardCharsets;

public class JSConverter {

    public static void main(String[] args) throws IOException {

        final File inputFile = new File("resources/travelDistances.txt");
        final File outputFile = new File("OnlineWordTravel/resources/checker.js");

        BufferedWriter fw = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(outputFile), StandardCharsets.ISO_8859_1));
        BufferedReader br = new BufferedReader(new InputStreamReader(new FileInputStream(inputFile), StandardCharsets.ISO_8859_1));

        fw.write("""
                function distance(charOne, charTwo){
                   var out = 0;
                """);
        String line;
        while ((line = br.readLine()) != null) {
            System.out.println(line);
            String template = "    if(charOne == '" + line.charAt(1) + "' && charTwo == '" + line.charAt(2) + "') { \n" +
                    "        return " + line.substring(7, line.length() - 2) + ";\n    }\n";
            fw.append(template);
            //fw.append("aa");
            System.out.println(template);
        }
        fw.append("}");
        fw.close();

    }
}
