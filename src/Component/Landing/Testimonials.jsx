const testimonials = [
  {
    name: "Rahul",
    review: "ExpenseIQ helped me save more every month.",
  },
  {
    name: "Priya",
    review: "The analytics feature is incredibly useful.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-8 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">
        What Users Say
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((item) => (
          <div
            key={item.name}
            className="bg-white p-8 rounded-2xl shadow-sm"
          >
            <p className="text-gray-600 italic mb-4">
              "{item.review}"
            </p>

            <h4 className="font-semibold">
              — {item.name}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;