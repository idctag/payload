/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    users: User;
    media: Media;
    pages: Page;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    pages: PagesSelect<false> | PagesSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: number;
  };
  globals: {
    header: Header;
    footer: Footer;
  };
  globalsSelect: {
    header: HeaderSelect<false> | HeaderSelect<true>;
    footer: FooterSelect<false> | FooterSelect<true>;
  };
  locale: 'en' | 'mn';
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt: string;
  _key?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: number;
  name: string;
  slug: string;
  layout?:
    | (
        | {
            title: string;
            scroll?: string | null;
            subtitle: string;
            advantage?:
              | {
                  title: string;
                  sub: string;
                  image: number | Media;
                  id?: string | null;
                  blockName?: string | null;
                  blockType: 'advantage';
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'hero';
          }
        | {
            sections: {
              title: string;
              sub: string;
              date: string;
              icon: number | Media;
              id?: string | null;
              blockName?: string | null;
              blockType: 'timelineSection';
            }[];
            scroll?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'timeline';
          }
        | {
            title?: string | null;
            direction?: ('right' | 'left') | null;
            slider: {
              logo: number | Media;
              id?: string | null;
            }[];
            id?: string | null;
            blockName?: string | null;
            blockType: 'logos';
          }
        | {
            title: string;
            img: number | Media;
            paragraph: string;
            work: string;
            experience: string;
            desc: string;
            id?: string | null;
            blockName?: string | null;
            blockType: 'intro';
          }
        | {
            title: string;
            scroll?: string | null;
            subtitle: string;
            desc: string;
            image?: (number | null) | Media;
            id?: string | null;
            blockName?: string | null;
            blockType: 'environment';
          }
        | {
            title: string;
            sub: string;
            desc: string;
            id?: string | null;
            blockName?: string | null;
            blockType: 'learningAge';
          }
        | {
            title: string;
            apps?:
              | {
                  title: string;
                  desc: string;
                  img: number | Media;
                  color?: ('red' | 'green' | 'blue' | 'purple' | 'orange' | 'pink') | null;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'apps';
          }
        | {
            scroll?: string | null;
            title: string;
            advices?:
              | {
                  advice: string;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'vocabulary';
          }
      )[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'users';
        value: number | User;
      } | null)
    | ({
        relationTo: 'media';
        value: number | Media;
      } | null)
    | ({
        relationTo: 'pages';
        value: number | Page;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  _key?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages_select".
 */
export interface PagesSelect<T extends boolean = true> {
  name?: T;
  slug?: T;
  layout?:
    | T
    | {
        hero?:
          | T
          | {
              title?: T;
              scroll?: T;
              subtitle?: T;
              advantage?:
                | T
                | {
                    advantage?:
                      | T
                      | {
                          title?: T;
                          sub?: T;
                          image?: T;
                          id?: T;
                          blockName?: T;
                        };
                  };
              id?: T;
              blockName?: T;
            };
        timeline?:
          | T
          | {
              sections?:
                | T
                | {
                    timelineSection?:
                      | T
                      | {
                          title?: T;
                          sub?: T;
                          date?: T;
                          icon?: T;
                          id?: T;
                          blockName?: T;
                        };
                  };
              scroll?: T;
              id?: T;
              blockName?: T;
            };
        logos?:
          | T
          | {
              title?: T;
              direction?: T;
              slider?:
                | T
                | {
                    logo?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        intro?:
          | T
          | {
              title?: T;
              img?: T;
              paragraph?: T;
              work?: T;
              experience?: T;
              desc?: T;
              id?: T;
              blockName?: T;
            };
        environment?:
          | T
          | {
              title?: T;
              scroll?: T;
              subtitle?: T;
              desc?: T;
              image?: T;
              id?: T;
              blockName?: T;
            };
        learningAge?:
          | T
          | {
              title?: T;
              sub?: T;
              desc?: T;
              id?: T;
              blockName?: T;
            };
        apps?:
          | T
          | {
              title?: T;
              apps?:
                | T
                | {
                    title?: T;
                    desc?: T;
                    img?: T;
                    color?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        vocabulary?:
          | T
          | {
              scroll?: T;
              title?: T;
              advices?:
                | T
                | {
                    advice?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header".
 */
export interface Header {
  id: number;
  logo: number | Media;
  nav: {
    label: string;
    link: string;
    icon?: (number | null) | Media;
    id?: string | null;
  }[];
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer".
 */
export interface Footer {
  id: number;
  title: string;
  logo: number | Media;
  scroll?: string | null;
  qr?: (number | null) | Media;
  email?: string | null;
  phone?: string | null;
  nav: {
    label: string;
    link: string;
    id?: string | null;
  }[];
  copyRight: string;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header_select".
 */
export interface HeaderSelect<T extends boolean = true> {
  logo?: T;
  nav?:
    | T
    | {
        label?: T;
        link?: T;
        icon?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer_select".
 */
export interface FooterSelect<T extends boolean = true> {
  title?: T;
  logo?: T;
  scroll?: T;
  qr?: T;
  email?: T;
  phone?: T;
  nav?:
    | T
    | {
        label?: T;
        link?: T;
        id?: T;
      };
  copyRight?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}