import React from "react";
import CustomButton from "../../components/custom-button/custom-button.component";
import MembershipPerk from "../../components/memebrship-perk/mermbership-perk.component";
import PromotionCard from "../../components/promotion-card/promotion-card.component";

import MoneyBack from "../../components/money-back/money-back.component";

export default function Join() {
  return (
    <div className="flex flex-col w-3/4 mx-auto pt-24">
      <h1 className="text-black text-5xl font-bold text-center mb-16">
        Take the next step and{" "}
        <span className="text-blue-500">
          invest in a better <br /> you
        </span>
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-3 justify-center items-end min-h-card-height">
        <PromotionCard
          billingRate="MONTHLY"
          price="10 / month"
          description="You're ready start advancing your career"
          highlighted={false}
        />

        <PromotionCard
          billingRate="ANNUAL"
          price="100 / year"
          pricePerMonth="~$8.3 / month"
          description="You're committed to getting hired and starting a career in tech"
          highlighted={true}
        />

        <PromotionCard
          billingRate="LIFETIME"
          price="200"
          pricePerMonth="Pay once, forever"
          description="You're serious about advancing your career and not falling behind"
          highlighted={false}
        />
      </div>

      {/* Perks */}
      <div className="mt-24">
        <h1 className="text-black text-5xl font-bold text-center mb-16">
          Every ECCC membership includes:
        </h1>
        <div className="grid grid-cols-3 justify-center gap-10 items-start">
          <MembershipPerk text="Unlimited access to all courses" />
          <MembershipPerk text="Invite to private Discord with 100K+ members" />
          <MembershipPerk text="Access to private Linkedin & Github networking group" />

          <MembershipPerk text="ECCC course completion certificates" />
          <MembershipPerk text="Ability to download lessons for offline learning" />
          <MembershipPerk text="Unlimited access to all future courses and content" />
        </div>

        <MoneyBack />
      </div>

      {/* Company carousel */}
      <div className=""></div>
    </div>
  );
}
