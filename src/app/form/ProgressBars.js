export default function ProgressBar({ step }) {
    const progress = (step / 4) * 100;
  
    return (
      <div className="w-full bg-gray-200 h-2 rounded">
        <div
          className="bg-blue-600 h-2 rounded"
          style={{ width: `${progress}%` }}
        />
      </div>
    );
  }
  