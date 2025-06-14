import sys
import json
import subprocess

def get_message():
    raw_length = sys.stdin.buffer.read(4)
    if not raw_length:
        return
    message_length = int.from_bytes(raw_length, byteorder='little')
    message = sys.stdin.buffer.read(message_length).decode('utf-8')
    return json.loads(message)

def send_message(message_content):
    encoded_content = json.dumps(message_content).encode('utf-8')
    sys.stdout.buffer.write(len(encoded_content).to_bytes(4, byteorder='little'))
    sys.stdout.buffer.write(encoded_content)
    sys.stdout.buffer.flush()

def main():
    message = get_message()
    url = message.get('url')
    if url:
        try:
            # Copy ke clipboard pakai powershell langsung (biar gak ribet install pyperclip)
            subprocess.run(['powershell', '-command', f'Set-Clipboard -Value "{url}"'], shell=True)
        except Exception as e:
            send_message({ "status": "ERROR", "msg": f"Gagal copy ke clipboard: {str(e)}" })
            return

        # Jalankan .bat (tanpa argumen, karena ambil dari clipboard)
        bat_path = "C:\\xampp\\htdocs\\YT-Native-Downloader_fix\\download_fix.bat"
        subprocess.run(f'start "" "{bat_path}"', shell=True)

        send_message({ "status": "OK", "msg": f"URL copied & launching downloader" })
    else:
        send_message({ "status": "ERROR", "msg": "No URL" })

if __name__ == "__main__":
    main()
