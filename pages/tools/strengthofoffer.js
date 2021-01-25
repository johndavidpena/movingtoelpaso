import { useState, useEffect } from 'react';
import Head from 'next/head';
import ToolsStyles from '../../stylesheets/Tools.module.css';

const StrengthOfOffer = () => {
  const [salesPrice, setSalesPrice] = useState(1);
  const [closingCost, setClosing] = useState(1);
  const [appraisal, setAppraisal] = useState(1);
  const [title, setTitle] = useState(1);
  const [warranty, setWarranty] = useState(1);
  const [survey, setSurvey] = useState(1);
  const [option, setOption] = useState(1);
  const [nonRealty, setNonRealty] = useState(1);
  const [closingDate, setClosingDate] = useState(1);
  const [earnest, setEarnest] = useState(1);

  const [total, setTotal] = useState(parseInt(salesPrice) + parseInt(closingCost) + parseInt(appraisal) + parseInt(title) + parseInt(warranty) + parseInt(survey) + parseInt(option) + parseInt(nonRealty) + parseInt(closingDate) + parseInt(earnest));

  useEffect(() => {
    setTotal(parseInt(salesPrice) + parseInt(closingCost) + parseInt(appraisal) + parseInt(title) + parseInt(warranty) + parseInt(survey) + parseInt(option) + parseInt(nonRealty) + parseInt(closingDate) + parseInt(earnest));
    return () => { }
  }, [salesPrice, closingCost, appraisal, title, warranty, survey, option, nonRealty, closingDate, earnest]);

  function handleSelect(e) {
    switch (e.target.name) {
      case 'salesPrice':
        setSalesPrice(parseInt(e.target.value));
        break;
      case 'closingCost':
        setClosing(parseInt(e.target.value));
        break;
      case 'appraisal':
        setAppraisal(parseInt(e.target.value));
        break;
      case 'title':
        setTitle(parseInt(e.target.value));
        break;
      case 'warranty':
        setWarranty(parseInt(e.target.value));
        break;
      case 'survey':
        setSurvey(parseInt(e.target.value));
        break;
      case 'option':
        setOption(parseInt(e.target.value));
        break;
      case 'nonRealty':
        setNonRealty(parseInt(e.target.value));
        break;
      case 'closingDate':
        setClosingDate(parseInt(e.target.value));
        break;
      case 'earnest':
        setEarnest(parseInt(e.target.value));
        break;
    }
  }

  return (
    <>
      <Head>
        <title>Peña El Paso - Strength of Offer</title>
      </Head>

      <div className={ToolsStyles.SOO}>
        <h1>Strength of Offer</h1>

        <div className={ToolsStyles.SOOformContainer}>

          <div className={ToolsStyles.SOOformLabels}>
            <p>Negotiable Item</p>
            <p>Selection</p>
            <p>Points</p>
          </div>

          <div className={ToolsStyles.SOOformItem}>
            <p>Sales Price</p>
            <select
              name='salesPrice'
              onChange={handleSelect}
              value={salesPrice}
            >
              <option value={1}>Below List Price - 1</option>
              <option value={2}>List Price - 2</option>
              <option value={3}>Above List Price - 3</option>
            </select>
            <p>{salesPrice}</p>
          </div>
          <div className={ToolsStyles.SOOformItem}>
            <p>Closing Costs</p>
            <select
              name='closingCost'
              onChange={handleSelect}
              value={closingCost}>
              <option value={1}>Seller Pays - 1</option>
              <option value={2}>Seller and Buyer Split - 2</option>
              <option value={3}>Buyer Pays - 3</option>
            </select>
            <p>{closingCost}</p>
          </div>
          <div className={ToolsStyles.SOOformItem}>
            <p>Conventional Loan Appraisal Addendum<span>* If Applicable</span></p>
            <select
              name='appraisal'
              onChange={handleSelect}
              value={appraisal}>
              <option value={1}>Seller Pays - 1</option>
              <option value={2}>Seller and Buyer Split or N/A- 2</option>
              <option value={3}>Buyer Pays - 3</option>
            </select>
            <p>{appraisal}</p>
          </div>
          <div className={ToolsStyles.SOOformItem}>
            <p>Title Policy</p>
            <select
              name='title'
              onChange={handleSelect}
              value={title}>
              <option value={1}>Seller Pays - 1</option>
              <option value={2}>Seller and Buyer Split - 2</option>
              <option value={3}>Buyer Pays - 3</option>
            </select>
            <p>{title}</p>
          </div>
          <div className={ToolsStyles.SOOformItem}>
            <p>Home Warranty</p>
            <select
              name='warranty'
              onChange={handleSelect}
              value={warranty}>
              <option value={1}>Seller Pays - 1</option>
              <option value={2}>Seller and Buyer Split or N/A- 2</option>
              <option value={3}>Buyer Pays - 3</option>
            </select>
            <p>{warranty}</p>
          </div>
          <div className={ToolsStyles.SOOformItem}>
            <p>Survey</p>
            <select
              name='survey'
              onChange={handleSelect}
              value={survey}>
              <option value={1}>Seller Pays - 1</option>
              <option value={2}>Seller and Buyer Split or N/A- 2</option>
              <option value={3}>Buyer Pays - 3</option>
            </select>
            <p>{survey}</p>
          </div>
          <div className={ToolsStyles.SOOformItem}>
            <p>Option Fee<br /><span>* Credited at Closing/Seller Keeps if Terminated</span></p>
            <select
              name='option'
              onChange={handleSelect}
              value={option}>
              <option value={1}>$50 - 1</option>
              <option value={2}>$100 - 2</option>
              <option value={3}>$200 - 3</option>
            </select>
            <p>{option}</p>
          </div>
          <div className={ToolsStyles.SOOformItem}>
            <p>Non-Realty Items Addendum</p>
            <select
              name='nonRealty'
              onChange={handleSelect}
              value={nonRealty}>
              <option value={1}>Additional Items Requested - 1</option>
              <option value={2}>Only MLS Appliances/Allowances - 2</option>
              <option value={3}>No Items Requested - 3</option>
            </select>
            <p>{nonRealty}</p>
          </div>
          <div className={ToolsStyles.SOOformItem}>
            <p>Closing Date</p>
            <select
              name='closingDate'
              onChange={handleSelect}
              value={closingDate}>
              <option value={1}>60 Days or Less - 1</option>
              <option value={2}>45 Days or Less - 2</option>
              <option value={3}>30 Days or Less - 3</option>
            </select>
            <p>{closingDate}</p>
          </div>
          <div className={ToolsStyles.SOOformItem}>
            <p>Earnest Money Deposit<br /><span>* Credited as Down Payment</span></p>
            <select
              name='earnest'
              onChange={handleSelect}
              value={earnest}>
              <option value={1}>Less Than $1000 - 1</option>
              <option value={2}>$1000 - 2</option>
              <option value={3}>1% Sales Price - 3</option>
            </select>
            <p>{earnest}</p>
          </div>

          <div className={ToolsStyles.SOOformResults}>
            <p>&nbsp;</p>
            <p>Total Points:</p>
            <p>{total}</p>
          </div>

          <div className={ToolsStyles.SOOformNotes}>
            <p>Single Offer Situation: Recommended total points between 12 - 15.</p>
            <p>Multiple Offer Situation: Recommended total points between 16 - 30.</p>
          </div>

        </div>
      </div>
    </>
  );
}

export default StrengthOfOffer;
