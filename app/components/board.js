import List from "./list"
import Card from "./card"

function Board() {
    return (
        <div className="flex flex-col flex-1 gap-4 p-4">
            <div>
                <h1 className="text-2xl font-bold">
                     Development
                </h1>
            </div>
            <main className="flex flex-1 gap-6">
                <List title="TODO">
                    <Card title="Implementar el modal"/>
                    <Card title="Implementar el modal"/>
                    <Card title="Implementar el modal"/>
                    <Card title="Implementar el modal"/>
                    <Card title="Implementar el modal"/>
                    <Card title="Implementar el modal"/>
                    <Card title="Implementar el modal"/>
                    <Card title="Implementar el modal"/>
                </List>
                <List>

                </List>
                <List>

                </List>
            </main>
        </div>
    )
}

export default Board
