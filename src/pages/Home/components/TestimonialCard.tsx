type TestimonialCard = {
  quote: string;
  author: string;
  position: string;
  image: string;
};
export default function TestimonialCard({
  quote,
  author,
  position,
  image,
}: TestimonialCard) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
      <div className="flex items-center mb-4">
        <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
          <img
            src={image || "/placeholder.svg"}
            alt={author}
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-medium">{author}</h4>
          <p className="text-sm text-muted-foreground">{position}</p>
        </div>
      </div>
      <p className="italic text-muted-foreground">"{quote}"</p>
    </div>
  );
}
