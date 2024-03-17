import { Button } from "../../ui/button";
import { Label } from "../../ui/label";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { Textarea } from "../../ui/textarea";

export default function ServiceInfoForm() {
  return (
    <div className="max-w-2xl mx-auto p-10 bg-white rounded-2xl shadow-lg min-w-[600px]">
      <h2 className="text-3xl font-bold mb-8">Fill out the box</h2>
      <form>
        <label className="text-lg font-medium mb-2 block" htmlFor="services">
          Services
        </label>
        <RadioGroup defaultValue="comfortable" className="flex mb-8">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">Web Design</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">App Design</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">UI/UX Design</Label>
          </div>
        </RadioGroup>
        <div className="mb-6">
          <label className="text-lg font-medium mb-2 block" htmlFor="message">
            Message
          </label>
          <Textarea placeholder="Write your message ..." />
        </div>
        <div className="flex justify-between">
          <Button variant="outline">Go Back</Button>
          <Button>Go Next</Button>
        </div>
      </form>
    </div>
  );
}
