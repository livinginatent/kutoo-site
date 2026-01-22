import Image from "next/image";

const features = [
  {
    icon: '/boxes.svg',
    title: "Crypto Boxes",
    description: "Discover themed boxes to help you understand well-known cryptocurrencies. Choose a predefined box or create your own.",
    borderGradient: "linear-gradient(66.49deg, #F28482 14.51%, #84A59D 95.46%)",
  },
  {
    icon: '/investing.svg',
    title: "Practice Investing",
    description: "Practice investing with simulated assets that mirror real market movements. Make mistakes without losing a penny.",
    borderGradient: "linear-gradient(158.31deg, #84A59D 3.77%, #CDB4DB 85.77%)",
  },
  {
    icon: '/market-data.svg',
    title: "Real Market Data",
    description: "Our practice environment uses live market data so when you go live, nothing feels different.",
    borderGradient: "linear-gradient(111.97deg, #CDB4DB 16.81%, #E9C46A 78.77%)",
  },
  {
    icon: '/learning.svg',
    title: "Structured Learning",
    description: "Progress through bite-sized lessons that explain blockchain and crypto concepts step by step.",
    borderGradient: "linear-gradient(180deg, #E9C46A 0%, #F28482 100%)",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-[#fefcfc]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#F284821A] shadow-card  text-sm font-medium mb-4 text-[#F28482]">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.2]">
            Everything You Need to
            <span className="block text-[#F28482] mt-1"> Master Crypto</span>
          </h2>
          <p className="text-lg text-[#586574] leading-relaxed">
            Explore blockchain concepts, practice through simulation using real market data, and understand crypto markets before using real money.
          </p>
        </div>
        
        <div className="flex flex-row items-center justify-center gap-[24px] flex-wrap">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative w-[281px] h-[304px] rounded-[20px] p-[2px] shadow-card hover:shadow-elevated "
              style={{ background: feature.borderGradient }}
            >
              {/* Crypto icon on top border for first box */}
              {index === 0 && (
                <div className="absolute top-[-27.5px] right-[10px] z-20">
                  <Image 
                    src="/crypto-kt.svg"
                    alt="Crypto icon"
                    width={55}
                    height={55}
                    className="object-contain"
                  />
                </div>
              )}
              {/* Investing icon on bottom border for second box */}
              {index === 1 && (
                <div className="absolute bottom-[-27.5px] right-[10px] z-20">
                  <Image 
                    src="/investing-kt.svg"
                    alt="Investing icon"
                    width={55}
                    height={55}
                    className="object-contain"
                  />
                </div>
              )}
              {/* Market icon on top border for third box */}
              {index === 2 && (
                <div className="absolute top-[-27.5px] right-[10px] z-20">
                  <Image 
                    src="/market-kt.svg"
                    alt="Market icon"
                    width={55}
                    height={55}
                    className="object-contain"
                  />
                </div>
              )}
              {index === 3 && (
                <div className="absolute bottom-[-27.5px] right-[10px] z-20">
                  <Image 
                    src="/learning-kt.svg"
                    alt="Market icon"
                    width={55}
                    height={55}
                    className="object-contain"
                  />
                </div>
              )}
              {/* Inner white card */}
              <div className="relative w-full h-full rounded-[20px] bg-white">
                {/* Icon - positioned absolutely */}
                <div 
                  className="absolute w-[55px] h-[55px] left-[31px] top-[30px] rounded-[15px] flex items-center justify-center"
                >
                  <Image 
                    src={feature.icon} 
                    alt={feature.title}
                    width={55}
                    height={55}
                    className="object-contain"
                  />
                </div>
                
                {/* Title - positioned absolutely */}
                <h3 
                  className="absolute left-[29px] top-[109px] font-bold text-[20px] leading-[26px]"
                  style={{ color: '#243242', fontFamily: 'Inter, sans-serif' }}
                >
                  {feature.title}
                </h3>
                
                {/* Description - positioned absolutely */}
                <p 
                  className="absolute left-[32px] top-[145px] w-[221px] font-normal text-[16px] leading-[26px]"
                  style={{ color: '#737F8C', fontFamily: 'Inter, sans-serif' }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
