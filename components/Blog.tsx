import React from 'react';

const Blog: React.FC = () => {
  const posts = [
    {
      id: 1,
      date: "September 12, 2023",
      title: "Understanding IVF: A Step-by-Step Guide for Couples",
      image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=800&auto=format&fit=crop" // IVF Lab/Microscope
    },
    {
      id: 2,
      date: "September 28, 2023",
      title: "Fertility Diet: Foods to Boost Your Reproductive Health",
      image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=800&auto=format&fit=crop" // Healthy food
    },
    {
      id: 3,
      date: "October 5, 2023",
      title: "Success Rates by Age: What to Expect During Treatment",
      image: "https://images.unsplash.com/photo-1557939628-9855f63ea8c7?q=80&w=800&auto=format&fit=crop" // Chart/Doctor
    }
  ];

  return (
    <section className="w-full py-20 md:py-32 bg-slate-50">
       <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-blue-500 font-bold tracking-wider text-sm uppercase block mb-3">
              MOM Fertility Blog
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Fertility Insights
            </h2>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {posts.map((post) => (
                <div key={post.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 cursor-pointer h-full flex flex-col">
                   
                   {/* Image Container */}
                   <div className="h-64 overflow-hidden relative flex-shrink-0">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-300"></div>
                   </div>

                   {/* Content Container */}
                   <div className="p-8 flex flex-col flex-grow">
                      <span className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-4 block">
                        {post.date}
                      </span>
                      <h3 className="text-xl font-bold text-slate-800 leading-snug group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                   </div>
                </div>
             ))}
          </div>
          
       </div>
    </section>
  )
}

export default Blog;