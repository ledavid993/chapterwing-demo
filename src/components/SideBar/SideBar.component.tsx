import Link from 'next/link';
import { Box, Heading, Divider } from '@chakra-ui/core';
import { reject, isNil } from 'ramda';
import clsx from 'clsx';
import { IoMdLogIn, IoIosSearch } from 'react-icons/io';
import { GiBookPile, GiBurningBook } from 'react-icons/gi';
import styles from './SideBar.module.scss';
import { useEffect } from 'react';

const config = {
  sectionDivider1: {
    sectionDivider: true,
  },
  title: {
    name: 'ChapterWing',
  },
  // section 1
  section2: {
    category: {
      name: 'Novels',
    },
    library: {
      name: 'Library',
      url: 'library',
      icon: <GiBookPile />,
    },
  },
  sectionDivider3: {
    sectionDivider: true,
  },
  extrasection: {
    aboutEX: {
      name: 'About',
      url: 'about',
    },
    contactEX: {
      name: 'Contact',
      url: 'contact',
    },
    termOfUseEX: {
      name: 'Term Of Use',
      url: 'termOfUse',
    },
  },
};

interface Props {
  isOpen: boolean;
}

const SideBar: React.FC<Props> = ({ isOpen }) => {
  const getSections = () => {
    return reject(
      (v) => isNil(v),
      Object.entries(config).map(([key, value]) => {
        if (key.includes('section')) return value;
      })
    );
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <Box
      className={clsx(styles.container, isOpen && styles.active)}
      backgroundColor="background.400"
    >
      <Link as="/" href="/">
        <Heading
          as="h2"
          size="md"
          color="white"
          height="80px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          className={styles.logo}
        >
          {config.title.name}
        </Heading>
      </Link>
      {getSections().map((section) => {
        return Object.entries(section as any).map(([key, value]: any) => {
          if (key === 'category')
            return (
              <div className={styles.category} key={value.name}>
                {value.name}
              </div>
            );
          else if (key.includes('EX'))
            return (
              <Link href={`/${value.url}`} key={value.name}>
                <div className={styles.extra} key={value.name}>
                  {value.name}
                </div>
              </Link>
            );
          else if (key.includes('sectionDivider'))
            return <Divider borderColor="background.300" key={value.name} />;
          else
            return (
              <Link href={`/${value.url}`} key={value.name}>
                <div className={styles.categoryType}>
                  <span>{value.icon}</span>
                  <div>{value.name}</div>
                </div>
              </Link>
            );
        });
      })}
    </Box>
  );
};

export default SideBar;
