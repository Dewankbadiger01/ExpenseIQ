const features = [
  {
    title: "Expense Tracking",
    description: "Record all your income and expenses easily.",
  },
  {
    title: "Analytics",
    description: "Visualize your spending habits with charts.",
  },
  {
    title: "Budget Planner",
    description: "Set monthly budgets and stay on track.",
  },
];

const Features = () => {
  return (
    <section className="py-16 px-8 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        Features
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-gray-50 p-8 rounded-2xl shadow-sm"
          >
            <h3 className="text-2xl font-semibold mb-4">
              {feature.title}
            </h3>

            <p className="text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;