import React from 'react';
import tactileIcon from '../../assets/tactile.svg';
import immersiveIcon from '../../assets/immersive.svg';
import sprintIcon from '../../assets/sprint.svg';
import './PricingSection.css';

const PricingSection = () => {
    const plans = [
      {
        title: 'Tactile',
        icon: tactileIcon,
        badge: 'Subscription',
        price: '£7,500',
        unit: '/Month',
        description:
          'Great for teams who work in weekly sprints, and need design and strategy support for improving existing areas or developing new features of their product',
        features: [
          'Dedicated Senior Designer',
          'Weekly Sprint Call',
          'Async Loom updates',
          'Unlimited slack comms',
          'Dedicated Design Director',
          'Scalable with your needs',
        ],
      },
      {
        title: 'Immersive',
        icon: immersiveIcon,
        badge: 'Subscription',
        price: '£15,500',
        unit: '/Month',
        description:
          'For teams who alongside product work need support on brand, marketing and website design & build.',
        features: [
          'Access to our full team',
          'Daily Standups',
          'Async Loom updates',
          'Unlimited slack comms',
          'Dedicated Design Director',
          'Scalable with your needs',
          'Pause or cancel anytime',
        ],
      },
      {
        title: 'Sprint',
        icon: sprintIcon,
        badge: 'Fast Turnaround',
        price: '£10,000',
        unit: '',
        description:
          '2 weeks to deliver a product feature, brand or landing page. A dedicated team of vertical specialists will be assigned to deliver incredible results at breakneck speed.',
        features: [
          'A specially curated team',
          'Weekly Sprint Call',
          'Async Loom updates',
          'Unlimited slack comms',
          'Dedicated Design Director',
          'Scalable with your needs',
        ],
      },
    ];
  
    return (
      <section className="pricing-section">
        <p className="pricing-label">● Pricing + Contact</p>
        <div className="pricing-columns">
          {plans.map((plan, i) => (
            <div className="pricing-column" key={i}>
              <div className="pricing-box">
                <div className="pricing-top">
                  <div className="pricing-row">
                    <div className="pricing-icon">
                      <img src={plan.icon} alt={`${plan.title} Icon`} />
                    </div>
                    <span className={`plan-badge ${plan.badge === 'Fast Turnaround' ? 'fast' : ''}`}>
                      {plan.badge}
                    </span>
                  </div>
                  <h3 className="plan-title">{plan.title}</h3>
                  <p className="plan-desc">{plan.description}</p>
                  <div className="plan-price">
                    <span>{plan.price}</span>
                    <span className="plan-price-unit">{plan.unit}</span>
                  </div>
                  <button className="call-btn">Book a call</button>
                </div>
                <div className="pricing-bottom">
                  <ul>
                    {plan.features.map((feature, fi) => (
                      <li key={fi}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default PricingSection;