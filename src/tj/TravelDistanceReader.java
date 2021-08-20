package tj;

import java.io.File;
import java.util.*;

/**
 * {{@TravelDistanceReader}} Objekt um die Keymap Daten von "Stand-up Maths" zu importieren.
 */
public class TravelDistanceReader {

    /**
     * Datei zur Keymap.
     */
    private final File file;

    //Konstruktor
    public TravelDistanceReader(File file){
        this.file = file;
    }

    //Eine HashMap welche eine Hashmap von zwei Chars enthält, diese zwei Chars haben eine Länge, welche der Wert der inneren Hashmap ist.
    public HashMap<HashMap<Character, Character>, Double> readTravelDistanceFromFile()   {

        HashMap<HashMap<Character, Character>, Double> keyMapWithTravelDistance = new HashMap<>();
        try {
            Scanner scanner = new Scanner(file);
            while (scanner.hasNextLine()) {
                HashMap<Character, Character> keyMap = new HashMap<>();
                String nextLine = scanner.nextLine();
                char[] keyPair = getKeyPair(nextLine);
                keyMap.put(keyPair[0], keyPair[1]);
                keyMapWithTravelDistance.put(keyMap, getDistanceFromLine(nextLine));
            }
        }catch (Exception e){
            System.out.println(e);
        }
        return keyMapWithTravelDistance;
    }

    private char[] getKeyPair (String line){
        char[] keyPair = new char[2];
        keyPair[0] = line.charAt(1);
        keyPair[1] = line.charAt(2);
        return keyPair;
    }

    private double getDistanceFromLine(String line){
        //Gibt den Wert zurück, dieser beginnt an 7. Stelle und endet 2 Stellen vor Zeilenende.
        //Bsp: |BS| = 69.34mm -> 69.34
        return Double.parseDouble(line.substring(7, line.length()-2));
    }
}
