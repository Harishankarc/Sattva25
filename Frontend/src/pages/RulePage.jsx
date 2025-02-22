import rulebookpdf from '../assets/pdf/SattvaRuleBook2025.pdf'
import Navbar from '../components/Navbar';
function RuleBook() {
    return (
      <>
      <Navbar/>
      <div className="min-h-screen bg-black py-24">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">SATTVA 2025 Rule Book</h1>
            <p className="text-xl text-gray-300">Official Guidelines and Regulations</p>
          </div>
          
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-xl">
            
            <div className="w-full aspect-[1/1.4] md:aspect-[16/9]">
              <iframe
                src={rulebookpdf}
                className="w-full h-full"
                title="SATTVA 2025 Rule Book"
              />
            </div>
            
            
            <div className="p-4 bg-zinc-900 border-t border-gray-700">
              <a
                href={rulebookpdf}
                download="SATTVA_2025_Rulebook.pdf"
                className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Download Rule Book
              </a>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
  
  export default RuleBook;
  