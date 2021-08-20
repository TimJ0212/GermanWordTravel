package tj;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.HashMap;
import java.util.List;

public class DistanceCalculator {

    private static final File TRAVEL_DISTANCE_FILE = new File("/home/tim/IdeaProjects/GermanWordTravel/resources/travelDistances.txt");
    private static TravelDistanceReader travelDistanceReader = new TravelDistanceReader(TRAVEL_DISTANCE_FILE);
    private static HashMap<HashMap<Character, Character>, Double> TRAVEL_DISTANCE = travelDistanceReader.readTravelDistanceFromFile();

    private static final File DICTIONARY_FILE = new File("/home/tim/IdeaProjects/GermanWordTravel/resources/german.dic");
    private static DictionaryReader dictionaryReader = new DictionaryReader(DICTIONARY_FILE);
    private static List<String> dictionary = dictionaryReader.readDictionaryFile();


    public static void main(String[] args) throws FileNotFoundException {

        int dictionarySize = dictionary.size();
        System.out.println(dictionarySize);
        String[] words = new String[dictionarySize];
        Double[] distances = new Double[dictionarySize];
        double highestDistance = 0;
        double highestDistancePerChar = 0;
        int indexOfHighestDistance = 0;
        int indexOfHighestDistancePerChar = 0;

        for(int i = 0; i < dictionarySize; i++){
            String word = dictionary.get(i);
            words[i] = word;
            distances[i] = calculateDistance(word);
            if(distances[i] > highestDistance) {
                highestDistance = distances[i];
                indexOfHighestDistance = i;
            }
            double distancePerChar = distances[i]/words[i].length();
            if(distancePerChar > highestDistancePerChar){
                highestDistancePerChar = distancePerChar;
                indexOfHighestDistancePerChar = i;
            }
        }

        System.out.println("Das Wort: " + words[indexOfHighestDistance] + " hatte mit " + distances[indexOfHighestDistance] + "mm die längste Länge auf der Tastatur");
        System.out.println("Das Wort: " + words[indexOfHighestDistancePerChar] + " hatte mit " + distances[indexOfHighestDistancePerChar] + "mm die längste Länge auf der Tastatur pro Buchstabe");
    }

    private static double calculateDistance(String word) {
        double distance = 0.0;
        char[] wordChars = word.toCharArray();
        for(int i = 0; i < wordChars.length-1; i++){
            if(wordChars[i] == wordChars[i+1]){
                break;
            }
            HashMap<Character, Character> keyPair = new HashMap<>();
            keyPair.put(wordChars[i], wordChars[i+1]);
            try {
                distance += TRAVEL_DISTANCE.get(keyPair);
            }catch(NullPointerException e){

                    //System.out.println(wordChars[i]);

            }
        }
        return distance;
    }
}
