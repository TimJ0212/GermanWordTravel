package tj;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Scanner;

public class DictionaryReader {

    private final File file;

    public DictionaryReader(File file){
        this.file = file;
    }

    public List<String> readDictionaryFile()   {
        List<String> dictionary = new ArrayList<>();
        System.out.println(10);
        try {
            System.out.println(15);
            FileInputStream fis = new FileInputStream(file);
            InputStreamReader isr = new InputStreamReader(fis, StandardCharsets.ISO_8859_1);
            BufferedReader br = new BufferedReader(isr);
            String line = "";
            while((line=br.readLine())!=null)
            {
                if(line.contains("ä")||line.contains("Ä")){
                   line =  line.replaceAll("[äÄ]","AE");
                }
                if(line.contains("ö")||line.contains("Ö")){
                    line = line.replaceAll("[öÖ]","OE");
                }
                if(line.contains("ü")||line.contains("Ü")){
                    line =line.replaceAll("[üÜ]","UE");
                }
                if(line.contains("ß")){
                    line = line.replaceAll("[ß]","ss");
                }
                if(line.contains("É")){
                    line = line.replaceAll("[É]","E");
                }
                if(line.contains("Á")){
                    line = line.replaceAll("[Á]","A");
                }
                if(line.contains("Ë")){
                    line = line.replaceAll("[Ë]","E");
                }
                if(line.contains("Ú")){
                    line = line.replaceAll("[Ú]","U");
                }
                if(line.contains("Ó")){
                    line = line.replaceAll("[Ó]","O");
                }
                if(line.contains("Ú")){
                    line = line.replaceAll("[Ú]","U");
                }
                if(line.contains("Ô")){
                    line = line.replaceAll("[Ô]","O");
                }

                dictionary.add(line.toUpperCase(Locale.ROOT));
            }
        }catch (Exception e){
            System.out.println(e);
        }
        return dictionary;
    }
}
