import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

const convertBreadcrumb = (string: string) => {
  return (
    string
      .replace(/-/g, ' ')
      .replace(/oe/g, 'ö')
      .replace(/ae/g, 'ä')
      .replace(/ue/g, 'ü')
      .charAt(0)
      .toUpperCase() + string.slice(1).toLowerCase()
  );
};

type linkPath = {
  breadcrumb: string;
  href: string;
};

type Props = {
  rootName: string;
  rootHref: string;
};

const Breadcrumbs: React.FC<Props> = ({ rootName, rootHref }) => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<linkPath[] | null>(null);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/');
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: '/' + linkPath.slice(0, i + 1).join('/'),
        };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <nav aria-label="breadcrumbs">
      <ol className="flex flex-row w-full text-xs mt-2 mb-1 ml-1">
        <Link className="text-primary-blue" href={rootHref}>
          {rootName}
        </Link>
        {breadcrumbs.map((breadcrumb, i) => {
          return (
            <li className="flex" key={breadcrumb.href}>
              <p className="mx-1">/</p>
              <Link
                className={
                  breadcrumbs.length - 1 === i
                    ? 'text-black'
                    : 'text-primary-blue'
                }
                href={breadcrumb.href}
              >
                {convertBreadcrumb(breadcrumb.breadcrumb).replace(/#$/, '')}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
