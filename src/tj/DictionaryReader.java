package tj;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

/**
 * {{@DictionaryReader}} Objekt liest ein Wörterbuch der deutschen Sprache ein.
 */
public class DictionaryReader {

    /**
     * Dictionary Datei
     */
    private final File file;

    //Konstruktor
    public DictionaryReader(File file){
        this.file = file;
    }

    /**
     * Liest die Datei aufgrund der Größe mit einem BufferedReader.
     * @return Liste mit Wörtern aus Wörterbuch-Datei.
     * @implNote Kann sehr groß werden.
     */
    public List<String> readDictionaryFile()   {
        List<String> dictionary = new ArrayList<>();
        try {
            FileInputStream fis = new FileInputStream(file);
            //Charset "ISO_8859_1" für alle möglichen Sonderzeichen der deutschen Sprache
            InputStreamReader isr = new InputStreamReader(fis, StandardCharsets.ISO_8859_1);
            BufferedReader br = new BufferedReader(isr);
            String line = "";
            while((line=br.readLine())!=null)
            {
                //Aufgrund der Keymap Daten für die Länge der Distanzen, müssen Sonderzeichen ersetzt werden.
                // Es wird davon ausgegangen das durch drücken von alt/shift oder ähnlichen Tasten das Sonderzeichen erstellt werden kann.
                //TODO: Keymap Daten beziehen sich auf eine englische Tastatur, vielleicht wäre es möglich die Daten für eine deutsche Tastatur zu bekommen. -> Kontakt mit "Stand-up Maths"
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
