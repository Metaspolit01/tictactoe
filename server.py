#!/usr/bin/env python3
"""
Simple HTTP Server for Tic-tac-toe Game
Run this script to serve the game on localhost
"""

import http.server
import socketserver
import webbrowser
import os
from pathlib import Path

# Configuration
PORT = 8000
DIRECTORY = Path(__file__).parent

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(DIRECTORY), **kwargs)
    
    def end_headers(self):
        # Add CORS headers for better compatibility
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

def main():
    # Change to the directory containing this script
    os.chdir(DIRECTORY)
    
    # Create server
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print(f"Tic-tac-toe server starting...")
        print(f" Serving files from: {DIRECTORY}")
        print(f" Server running at: http://localhost:{PORT}")
        print(f" Game URL: http://localhost:{PORT}/index.html")
        print(f"  Press Ctrl+C to stop the server")
        print("-" * 50)
        
        # Automatically open the game in default browser
        try:
            webbrowser.open(f'http://localhost:{PORT}/index.html')
            print("✅ Game opened in your default browser!")
        except:
            print("⚠️  Could not open browser automatically.")
            print(f"   Please manually open: http://localhost:{PORT}/index.html")
        
        print("-" * 50)
        
        # Start serving
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n🛑 Server stopped by user")
            httpd.shutdown()

if __name__ == "__main__":
    main() 
