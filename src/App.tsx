import { useState } from "react";
// Import necessary components from shadcn/ui
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "./components/ui/card";
import { Separator } from "./components/ui/separator";

const App = () => {
  const [count, setCount] = useState<number>(0);

  const HandleAdd = () => {
    if (count < 10 ){
      setCount(count + 1)
    }
  };

  const HandleRemove = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const HandleReset = () => {
    setCount(0);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-sm shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold tracking-tight">
            Simple Counter App
          </CardTitle>
          <CardDescription>
            Built with React, Tailwind CSS, and shadcn/ui.
          </CardDescription>
        </CardHeader>
        <Separator className="mb-6" />
        <CardContent className="flex flex-col items-center justify-center">
          <div className="mb-8">
            <h3 className="text-xl font-medium text-gray-500 uppercase tracking-wider">
              Current Count:
            </h3>
            <p className="text-7xl font-extrabold text-blue-600 dark:text-blue-400 mt-2 text-center">
              {count}
            </p>
          </div>
          <div className="flex w-full space-x-4">
            {/* Add Button: Use 'default' variant for primary action */}
            <Button
              onClick={HandleAdd}
              className="flex-1 h-12 text-base"
              aria-label="Increase count"
            >
              Add
            </Button>
            {/* remove button */}
            <Button
              onClick={HandleRemove}
              variant="outline"
              className="flex-1 h-12 text-base"
              disabled={count === 0} // Disable when count is 0
              aria-label="Decrease count"
            >
              Remove
            </Button>
          </div>
        </CardContent>
        <CardFooter className="mt-6 justify-center">
          <Button
            onClick={HandleReset}
            variant="destructive"
            className="w-full max-w-[50%]"
          >
            Reset
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default App;
