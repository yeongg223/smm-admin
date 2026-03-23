import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Input } from "./components/ui/input";

function App() {
  return (
    <Card className="w-[340px]">
      <CardHeader>
        <CardTitle>LOGIN</CardTitle>
      </CardHeader>
      <CardContent>
        <Input placeholder="ID" />
        <Input placeholder="PASSWORD" />
      </CardContent>
      <CardFooter>
        <Button>LOGIN</Button>
      </CardFooter>
    </Card>
  );
}

export default App;
