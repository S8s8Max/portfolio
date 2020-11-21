class Polygon():
    def __init__(self, node, length):
        self.node = node
        self.length = length

    def perimeter(self):
        return self.node * self.length

    def __str__(self):
        return "Path Length : " + str(self.perimeter())

polygon = Polygon(5, 7)
print(polygon)

