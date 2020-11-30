from tkinter import Frame, Entry, Button, LEFT, Label, StringVar, END


class DataEntry(Frame):
    def __init__(self, master=None):
        super().__init__(master)
        self.pack()
        self.master.title("Data Entry 2")


        self.ent1 = Entry(self, font=("Helvetica", 24))
        self.ent1.pack()

        self.ent2 = Entry(self, font=("Helvetica", 24))
        self.ent2.pack()

        frame = Frame(self)
        frame.pack()


        Button(frame, text="足し算", command=self.entry1).pack(side=LEFT)
        Button(frame, text="引き算", command=self.entry2).pack(side=LEFT)

        self.display = StringVar()
        Label(self, textvariable=self.display, font=("Helvetica", 24),
              width=20, height=5, bg="PaleGreen").pack()



    def entry1(self):
        i = int(self.ent1.get())
        j = int(self.ent2.get())
        self.display.set(i+j)

        self.ent1.delete(0, END)
        self.ent2.delete(0, END)

    def entry2(self):
        i = int(self.ent1.get())
        j = int(self.ent2.get())
        self.display.set(i - j)

        self.ent1.delete(0, END)
        self.ent2.delete(0, END)


# メインルーチン
DataEntry().mainloop()
