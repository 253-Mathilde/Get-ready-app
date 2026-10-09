const fs = require('fs');
const path = require('path');

// 1. VOLLBILD-MODUS ERZWINGEN (BALKEN KILLEN)
const manifestPath = path.join(__dirname, 'android/app/src/main/AndroidManifest.xml');
if (fs.existsSync(manifestPath)) {
    let manifest = fs.readFileSync(manifestPath, 'utf8');
    
    // Fügt das Vollbild-Theme direkt in den Activity-Tag ein
    if (!manifest.includes('android:theme="@android:style/Theme.NoTitleBar.Fullscreen"')) {
        manifest = manifest.replace(
            'android:name=".MainActivity"',
            'android:name=".MainActivity"\n        android:theme="@android:style/Theme.NoTitleBar.Fullscreen"\n        android:windowLayoutInDisplayCutoutMode="shortEdges"'
        );
        fs.writeFileSync(manifestPath, manifest, 'utf8');
        console.log('✅ AndroidManifest.xml erfolgreich auf echtes Vollbild geupdatet!');
    }
}

// 2. APP-ICONS REPARIEREN
const iconSource = path.join(__dirname, 'app icon (2).png');
const resFolder = path.join(__dirname, 'android/app/src/main/res');

const mipmapFolders = [
    'mipmap-mdpi',
    'mipmap-hdpi',
    'mipmap-xhdpi',
    'mipmap-xxhdpi',
    'mipmap-xxxhdpi'
];

if (fs.existsSync(iconSource) && fs.existsSync(resFolder)) {
    mipmapFolders.forEach(folder => {
        const targetDir = path.join(resFolder, folder);
        if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, { recursive: true });
        }
        // Überschreibt sowohl die eckigen als auch die runden Standard-Google-Icons mit deinem Logo
        fs.copyFileSync(iconSource, path.join(targetDir, 'ic_launcher.png'));
        fs.copyFileSync(iconSource, path.join(targetDir, 'ic_launcher_round.png'));
        fs.copyFileSync(iconSource, path.join(targetDir, 'ic_launcher_foreground.png'));
    });
    console.log('✅ App-Icons erfolgreich in alle Android-Systemordner kopiert!');
} else {
    console.log('❌ Fehler: app icon (2).png oder Android-Ordner wurde nicht gefunden.');
}
