import React, { useState } from "react";
import { BLOG_DATA, BlogPost } from "../types";
import { BookOpen, Calendar, User, Clock, ArrowRight, Calculator, RefreshCw, Sparkles, CheckCircle } from "lucide-react";

interface BlogProps {
  onOpenConsultation: (customMessage?: string) => void;
}

export default function Blog({ onOpenConsultation }: BlogProps) {
  // Articles state
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Calculator state
  const [loanAmount, setLoanAmount] = useState<number>(15000);
  const [interestRate, setInterestRate] = useState<number>(7.5);
  const [loanTerm, setLoanTerm] = useState<number>(3); // years
  const [monthlyPayment, setMonthlyPayment] = useState<number>(466.53);
  const [totalInterest, setTotalInterest] = useState<number>(1795.04);

  const calculateLoan = (e: React.FormEvent) => {
    e.preventDefault();
    const principal = loanAmount;
    const calculatedInterest = interestRate / 100 / 12;
    const calculatedPayments = loanTerm * 12;

    // Formula: M = P [ i(1+i)^n ] / [ (1+i)^n - 1 ]
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
      setMonthlyPayment(parseFloat(monthly.toFixed(2)));
      setTotalInterest(parseFloat((monthly * calculatedPayments - principal).toFixed(2)));
    } else {
      setMonthlyPayment(0);
      setTotalInterest(0);
    }
  };

  const handleApplyWithCalculation = () => {
    const customMessage = `Repayment Estimate Submission: Loan Amount $${loanAmount}, Interest Rate ${interestRate}%, Term ${loanTerm} years. Estimating monthly payment of $${monthlyPayment}. Please verify matched lender offers.`;
    onOpenConsultation(customMessage);
  };

  return (
    <div className="bg-slate-50 text-slate-900 font-sans overflow-x-hidden animate-fade-in" id="blog-resources-page">
      
      {/* 1. Header Banner */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl text-center space-y-4">
          <span className="text-xs uppercase font-mono font-bold tracking-widest text-amber-600">Education Portal</span>
          <h1 className="text-3xl font-extrabold font-sans sm:text-4xl lg:text-5xl text-slate-900">
            Financial Education & Tools
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Boost your financial literacy. Learn strategies to consolidate personal debt, build business working capital, improve credit scores, and calculate monthly repayments.
          </p>
        </div>
      </section>

      {/* 2. Content Layout (Articles on left, Repayment Calculator on right) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Educational Articles List */}
            <div className="lg:col-span-7 space-y-8" id="blog-posts-list">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-3">
                <BookOpen className="h-5 w-5 text-amber-600" />
                Latest Informational Articles
              </h3>

              {!selectedPost ? (
                <div className="space-y-6">
                  {BLOG_DATA.map((post) => (
                    <article 
                      key={post.id}
                      className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-100/50 transition-all text-left space-y-4 shadow-sm"
                    >
                      <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-500 font-mono">
                        <span className="text-amber-600 font-bold uppercase">{post.category}</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" /> {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" /> {post.readTime}
                        </span>
                      </div>

                      <h4 className="text-xl font-bold text-slate-900 leading-snug hover:text-amber-600 transition-colors cursor-pointer">{post.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{post.summary}</p>

                      <div className="pt-2 flex items-center justify-between animate-fade-in">
                        <span className="text-[10px] text-slate-550 font-mono flex items-center gap-1">
                          <User className="h-3 w-3" /> By {post.author}
                        </span>
                        <button
                          onClick={() => setSelectedPost(post)}
                          className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1 cursor-pointer"
                        >
                          Read Article <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                /* Detailed Article View */
                <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 text-left space-y-6 animate-fade-in shadow-2xl shadow-slate-100" id="full-article-view">
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="text-xs text-slate-550 hover:text-slate-900 flex items-center gap-1 mb-4 font-semibold cursor-pointer"
                  >
                    &larr; Back to Articles List
                  </button>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-mono">
                    <span className="text-amber-600 font-bold uppercase">{selectedPost.category}</span>
                    <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {selectedPost.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {selectedPost.readTime}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">{selectedPost.title}</h2>
                  
                  <div className="flex items-center gap-2 text-xs text-slate-500 pb-4 border-b border-slate-200">
                    <div className="h-6 w-6 rounded-full bg-slate-100 flex items-center justify-center font-bold text-[10px] text-amber-600 uppercase border border-slate-200">
                      {selectedPost.author.charAt(0)}
                    </div>
                    <span>Published by <strong className="text-slate-800">{selectedPost.author}</strong></span>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {selectedPost.content.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedPost(null)}
                      className="px-4 py-2 border border-slate-200 text-xs text-slate-550 hover:text-slate-900 rounded-lg hover:bg-slate-50 cursor-pointer"
                    >
                      Close Article
                    </button>
                    <button
                      onClick={() => onOpenConsultation(`Inquiry after reading article: "${selectedPost.title}"`)}
                      className="px-4 py-2 bg-amber-500 text-slate-950 text-xs font-bold rounded-lg hover:bg-amber-600 cursor-pointer"
                    >
                      Inquire on this Solution
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Loan Repayment Calculator */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-white border border-slate-200 text-left space-y-6 shadow-2xl shadow-slate-100" id="loan-calculator-panel">
              
              <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
                <Calculator className="h-5 w-5 text-amber-600" />
                <h3 className="text-lg font-bold text-slate-900">Loan Repayment Calculator</h3>
              </div>
              
              <p className="text-[11px] text-slate-500 leading-normal">
                Estimate your monthly repayments. Enter your parameters to compute estimated outcomes, then submit directly to compare actual affiliate wholesale lender terms.
              </p>

              {/* Calculator Form */}
              <form onSubmit={calculateLoan} className="space-y-4">
                <div>
                  <div className="flex justify-between text-[11px] text-slate-500 font-mono font-bold uppercase tracking-wider">
                    <label htmlFor="calc-amount">Loan Amount ($)</label>
                    <span className="text-slate-900 font-extrabold">${loanAmount.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    id="calc-amount"
                    min={2000}
                    max={100000}
                    step={1000}
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                    className="w-full accent-amber-600 mt-2 cursor-pointer h-1.5 bg-slate-100 rounded-lg appearance-none"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                    <span>$2,000</span>
                    <span>$100,000</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="calc-rate" className="block text-[11px] text-slate-500 font-mono font-bold uppercase tracking-wider">Interest Rate (%)</label>
                    <input
                      type="number"
                      id="calc-rate"
                      step={0.1}
                      min={1}
                      max={35}
                      value={interestRate}
                      onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)}
                      className="mt-1.5 w-full h-10 bg-slate-50 border border-slate-200 rounded-lg px-3 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="calc-term" className="block text-[11px] text-slate-500 font-mono font-bold uppercase tracking-wider">Term Length (Years)</label>
                    <select
                      id="calc-term"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(parseInt(e.target.value))}
                      className="mt-1.5 w-full h-10 bg-slate-50 border border-slate-200 rounded-lg px-3 text-xs text-slate-700 focus:outline-none focus:border-amber-500 cursor-pointer"
                    >
                      <option value={1}>1 Year (12 mo)</option>
                      <option value={2}>2 Years (24 mo)</option>
                      <option value={3}>3 Years (36 mo)</option>
                      <option value={4}>4 Years (48 mo)</option>
                      <option value={5}>5 Years (60 mo)</option>
                      <option value={7}>7 Years (84 mo)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full h-10 items-center justify-center rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-bold text-amber-650 hover:text-amber-700 transition-all flex gap-1.5 cursor-pointer"
                >
                  <RefreshCw className="h-3.5 w-3.5" /> Re-Calculate Estimations
                </button>
              </form>

              {/* Calculated Outputs Display Box */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left space-y-3">
                <div className="flex items-center gap-1.5 text-[10px] text-amber-600 font-mono font-bold uppercase tracking-wider">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Calculated Loan Estimate</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="block text-[10px] text-slate-500 uppercase font-mono">Monthly Repayment:</span>
                    <span className="text-xl sm:text-2xl font-extrabold font-mono text-slate-900">${monthlyPayment.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-500 uppercase font-mono">Total Interest Cost:</span>
                    <span className="text-xl sm:text-2xl font-extrabold font-mono text-amber-600">${totalInterest.toLocaleString()}</span>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-3 flex flex-col space-y-1 text-[10px] text-slate-500 leading-normal">
                  <p>Estimated total lifetime repayment: <strong>${(loanAmount + totalInterest).toLocaleString()}</strong></p>
                  <p>* Calculation is for informational purposes only. Actual interest rates starting from 5.99% APR (OAC).</p>
                </div>
              </div>

              {/* Apply with calculation CTA */}
              <button
                onClick={handleApplyWithCalculation}
                className="w-full h-11 items-center justify-center rounded-lg bg-amber-500 font-bold text-slate-950 hover:bg-amber-600 text-xs uppercase tracking-wider active:scale-95 transition-all cursor-pointer flex gap-1.5"
              >
                <CheckCircle className="h-4 w-4" /> Submit Estimate to Broker
              </button>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
