import { ReactElement } from 'react';

import DashboardLayout from '@/components/layouts/DashboardLayout';
import MyDashBoardProductCard from '@/components/widgets/Cards/MyDashBoardProductCard';
import MyDashBoardSummaryCard from '@/components/widgets/Cards/MyDashBoardSummaryCard';
import MyEmployeeProdoscore from '@/components/widgets/Charts/MyEmployeeProdoscore';
import data from '@/mocks/employeeDashboardAjax.json';
import productData from '@/mocks/employeeDashboardProductsMock.json';
import iconOrg from '@/public/img/other/icon-organization.png';
import iconSelf from '@/public/img/other/icon-self.png';
import iconTeam from '@/public/img/other/icon-team.png';

const MyDashBoard = () => {
  return (
    <div className="flex flex-col gap-3 w-full p-[1%]">
      <div className="flex flex-col lg:flex-row gap-2">
        <div className="w-full lg:w-1/3">
          <MyDashBoardSummaryCard
            icon={iconSelf}
            heading="Your Prodoscore"
            rank={data.prodoscores.self.rank}
            score={
              typeof data.prodoscores.self.score[0] === 'number'
                ? data.prodoscores.self.score[0]
                : 0
            }
            scoreDelta={
              typeof data.prodoscores.self.score_delta !== 'boolean'
                ? Number(data.prodoscores.self.score_delta[1])
                : null
            }
            deltaDesc={
              typeof data.prodoscores.self.score_delta !== 'boolean'
                ? data.prodoscores.self.score_delta[0]
                : null
            }
          />
        </div>
        <div className="w-full lg:w-1/3">
          <MyDashBoardSummaryCard
            icon={iconTeam}
            heading="Team Prodoscore"
            heighest={data.prodoscores.team.score_extremes[0][0]}
            lowest={data.prodoscores.team.score_extremes[1][0]}
            score={
              typeof data.prodoscores.team.score[0] === 'number'
                ? data.prodoscores.team.score[0]
                : 0
            }
            scoreDelta={
              typeof data.prodoscores.team.score_delta !== 'boolean'
                ? Number(data.prodoscores.team.score_delta[1])
                : null
            }
            deltaDesc={
              typeof data.prodoscores.self.score_delta !== 'boolean'
                ? data.prodoscores.self.score_delta[0]
                : null
            }
          />
        </div>
        <div className="w-full lg:w-1/3">
          <MyDashBoardSummaryCard
            icon={iconOrg}
            heading="Organization Prodoscore"
            heighest={data.prodoscores.organization.score_extremes[0][0]}
            lowest={data.prodoscores.organization.score_extremes[1][0]}
            score={
              typeof data.prodoscores.organization.score[0] === 'number'
                ? data.prodoscores.organization.score[0]
                : 0
            }
            scoreDelta={
              typeof data.prodoscores.organization.score_delta !== 'boolean'
                ? Number(data.prodoscores.organization.score_delta[1])
                : null
            }
            deltaDesc={
              typeof data.prodoscores.organization.score_delta !== 'boolean'
                ? data.prodoscores.organization.score_delta[0].toString()
                : null
            }
          />
        </div>
      </div>
      <MyEmployeeProdoscore role="Administrator" graphData={data.day_stats} />
      <div className="flex flex-col gap-2">
        <h4 className="text-lg font-semibold">
          Your activities{' '}
          <span className="text-sm font-thin">{productData.date}</span>
        </h4>
        <div className="flex">
          <div className="w-full overflow-x-auto">
            <div className="flex gap-2 pb-3">
              {Object.values(productData.products).map((product) => (
                <MyDashBoardProductCard
                  //@ts-ignore
                  product={product}
                  key={product.product_name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MyDashBoard.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default MyDashBoard;
