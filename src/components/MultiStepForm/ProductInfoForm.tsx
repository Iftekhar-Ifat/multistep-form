import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ProductInfoForm() {
  return (
    <div className="max-w-2xl mx-auto p-10 bg-white rounded-2xl shadow-lg min-w-[600px] min-h-[390px]">
      <h1 className="text-3xl font-bold mb-8">Fill out the box</h1>
      <div className="space-y-6">
        <div>
          <label className="font-semibold mb-2" htmlFor="timeline">
            Timeline
          </label>
          <Select>
            <SelectTrigger id="timeline">
              <SelectValue placeholder="Within 1 week" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="1week">Within 1 week</SelectItem>
              <SelectItem value="2weeks">Within 2 weeks</SelectItem>
              <SelectItem value="1month">Within 1 month</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="font-semibold mb-2" htmlFor="product">
            Product
          </label>
          <div className="flex items-center">
            <Input className="flex-1" id="product" placeholder="2 items" />
            <Button className="ml-2" variant="secondary">
              <PlusIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <Button variant="outline">Go Back</Button>
        <Button>Go Next</Button>
      </div>
    </div>
  );
}

function PlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
