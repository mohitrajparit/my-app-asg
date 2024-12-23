import { useSelector, useDispatch } from 'react-redux';
import { updateFormData } from '../../store/formSlice';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
export default function Step1() {
  const formData = useSelector((state) => state.form.formData);
  const dispatch = useDispatch();

  return (
    <div className='w-full max-w-lg mx-auto p-4 sm:p-6 md:p-8'>
      <h2 className='p-4 mb-4'>Step 1: Personal Information</h2>
      <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
        <input
        type="text"
        placeholder="Name"
        value={formData.name || ''}
        onChange={(e) => dispatch(updateFormData({ name: e.target.value }))}
        className="p-2 m-2 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
        </TooltipTrigger>
        <TooltipContent>
          <h1>Enter your Full Name</h1>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>

      
    </div>
  );
}
