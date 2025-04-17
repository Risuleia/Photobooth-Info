use std::{thread, time::Duration};

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![])
        .setup(|app| {
            let window = tauri::Manager::get_webview_window(app, "main").unwrap();
      
            thread::spawn(move || {
                thread::sleep(Duration::from_millis(8000));
                let _ = window.set_fullscreen(true);
            });
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
