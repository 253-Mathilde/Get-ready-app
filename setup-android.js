const fs = require('fs');
const path = require('path');

// 1. BALKEN REIN ÜBER JAVA-CODE KILLEN (SICHERER WEG)
const javaPath = path.join(__dirname, 'android/app/src/main/java/com/mathilde/prete/MainActivity.java');
if (fs.existsSync(javaPath)) {
    let javaCode = fs.readFileSync(javaPath, 'utf8');
    
    // Fügt die Android-Vollbild-Pakete hinzu
    if (!javaCode.includes('android.view.WindowManager')) {
        javaCode = javaCode.replace(
            'import com.getcapacitor.BridgeActivity;',
            'import com.getcapacitor.BridgeActivity;\nimport android.os.Bundle;\nimport android.view.WindowManager;\nimport android.view.View;'
        );
        
        // Injiziert den echten Fullscreen-Code direkt beim App-Start (onCreate)
        const onCreateCode = `
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        // Blendet die Statusleiste und Navigationsleiste komplett aus
        getWindow().getDecorView().setSystemUiVisibility(
            View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
            | View.SYSTEM_UI_FLAG_LAYOUT_STABLE
            | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
            | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
            | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
            | View.SYSTEM_UI_FLAG_FULLSCREEN
        );
        
        // Erlaubt das Strecken hinter die Kamera-Notch
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.P) {
            getWindow().getAttributes().layoutInDisplayCutoutMode = 
                WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES;
        }
    }`;
        
        javaCode = javaCode.replace('public class MainActivity extends BridgeActivity {}', `public class MainActivity extends BridgeActivity {${onCreateCode}\n}`);
        fs.writeFileSync(javaPath, javaCode, 'utf8');
        console.log('✅ Java-Code erfolgreich auf echtes Vollbild umprogrammiert!');
    }
}

// 2. APP-ICONS REPARIEREN (Für den Homescreen)
const iconSource = path.join(__dirname, 'app icon (2).png');
const resFolder = path.join(__dirname, 'android/app/src/main/res');
const mipmapFolders = ['mipmap-mdpi', 'mipmap-hdpi', 'mipmap-xhdpi', 'mipmap-xxhdpi', 'mipmap-xxxhdpi'];

if (fs.existsSync(iconSource) && fs.existsSync(resFolder)) {
    mipmapFolders.forEach(folder => {
        const targetDir = path.join(resFolder, folder);
        if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
        fs.copyFileSync(iconSource, path.join(targetDir, 'ic_launcher.png'));
        fs.copyFileSync(iconSource, path.join(targetDir, 'ic_launcher_round.png'));
        fs.copyFileSync(iconSource, path.join(targetDir, 'ic_launcher_foreground.png'));
    });
    console.log('✅ App-Icons erfolgreich kopiert!');
} else {
    console.log('❌ Fehler bei den Homescreen-Icons.');
}

// 3. --- NEU: BENACHRICHTIGUNGS-ICONS KOPIEREN (Für die Statusleiste oben) ---
console.log('Kopiere weiße Benachrichtigungs-Icons...');
const sourceResDir = __dirname; 
const drawableFolders = [
    'drawable-hdpi',
    'drawable-mdpi',
    'drawable-xhdpi',
    'drawable-xxhdpi',
    'drawable-xxxhdpi'
];

if (fs.existsSync(resFolder)) {
    drawableFolders.forEach(folder => {
        const fromPath = path.join(sourceResDir, folder);
        const toPath = path.join(resFolder, folder);

        if (fs.existsSync(fromPath)) {
            if (!fs.existsSync(toPath)) {
                fs.mkdirSync(toPath, { recursive: true });
            }

            const iconName = 'ic_stat_notification.png';
            const fileFrom = path.join(fromPath, iconName);
            const fileTo = path.join(toPath, iconName);

            if (fs.existsSync(fileFrom)) {
                fs.copyFileSync(fileFrom, fileTo);
                console.log(`✓ ${folder}/${iconName} erfolgreich kopiert.`);
            } else {
                console.log(`⚠ Datei ${iconName} in ${folder} nicht gefunden!`);
            }
        } else {
            console.log(`⚠ Quellordner ${folder} fehlt im Hauptverzeichnis.`);
        }
    });
    console.log('✅ Benachrichtigungs-Icons erfolgreich eingerichtet!');
} else {
    console.log('❌ Ziel-Res-Ordner für Benachrichtigungs-Icons existiert nicht.');
}
