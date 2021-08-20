package tj;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.*;

public class TravelDistanceReader {
    private final File file;

    public TravelDistanceReader(File file){
        this.file = file;
    }

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
        return Double.parseDouble(line.substring(7, line.length()-2));
    }
}
