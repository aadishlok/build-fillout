import MenuBar from "@/components/MenuBar/menuBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center font-sans">
      <div className="relative w-full max-w-[1140px] px-4">
        <div className="my-8 px-6 py-6 bg-white rounded-[8px] shadow-sm text-gray-700">
          <p>Welcome to the Fillout Assessment Project.</p>
          <p>The project will demonstrate the following objectives:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Show a series of form pages (e.g. `&quot;`Info`&quot;`, `&quot;`Details`&quot;`, `&quot;`Other`&quot;`, `&quot;`Ending`&quot;`)</li>
            <li>Support drag to re-order pages</li>
            <li>Support adding a new page between any two existing pages via a `&quot;` button that appears on hover</li>
            <li>Open a context menu per page (rename, duplicate, delete - those buttons don`&apos;`t do anything)</li>
            <li>Highlight the active page + allow selecting other pages</li>
          </ul>
        </div>
        <MenuBar />
      </div>
    </div>
  );
}
