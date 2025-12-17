export default function SectionHeading({ title, linkText, link }:any) {
  return (
    <div className="flex justify-between items-center mb-5">
      <h2 className="text-xl font-semibold">{title}</h2>

      {link && (
        <a href={link} className="text-sm text-blue-600 hover:underline">
          {linkText}  
        </a>
      )}
    </div>
  );
}
