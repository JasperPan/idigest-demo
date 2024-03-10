import { DatePicker } from "antd";

export default function Home() {
  return (
    <main className="min-h-screen p-16">
      <h1 className="pb-4">Hello World!</h1>
      <DatePicker className="w-200px" format="MM/DD/YYYY dddd" />
    </main>
  );
}
