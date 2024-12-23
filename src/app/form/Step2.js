import { useSelector, useDispatch } from 'react-redux';
import { updateFormData } from '../../store/formSlice';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
export default function Step2() {
  const formData = useSelector((state) => state.form.formData);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(updateFormData({ [e.target.name]: e.target.value }));
  };

  return (
    <div className='w-full max-w-lg mx-auto p-4 sm:p-6 md:p-8'>
      <h2>Step 2: Address Details</h2>
      <div className="flex flex-col gap-4">
      <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address || ''}
          onChange={handleInputChange}
          className="p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
 </TooltipTrigger>
        <TooltipContent>
          <h1>Enter your Full Address</h1>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
<TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city || ''}
          onChange={handleInputChange}
          className="p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
 </TooltipTrigger>
        <TooltipContent>
          <h1>Enter your City Name</h1>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
<TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
        <input
          type="text"
          name="zipCode"
          placeholder="ZIP Code"
          value={formData.zipCode || ''}
          onChange={handleInputChange}
          className="p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
         </TooltipTrigger>
        <TooltipContent>
          <h1>Enter your ZIP code</h1>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
      </div>
    </div>
  );
}
