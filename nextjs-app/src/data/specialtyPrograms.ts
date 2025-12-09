import { SpecialtyProgram } from './specialtyProgramTypes';
import { motorsportProgram } from './motorsportProgram';
import { aiProgram } from './aiProgram';
import { psychologyProgram } from './psychologyProgram';
import { aerospaceProgram } from './aerospaceProgram';
import { biomedicalScienceProgram } from './biomedicalScienceProgram';
import { biomedicalEngineeringProgram } from './biomedicalEngineeringProgram';
import { civilProgram } from './civilProgram';
import { accountingProgram } from './accountingProgram';
import { semiconductorProgram } from './electricalPrograms';
import { computerSystemsProgram } from './computerPrograms';
import { embeddedSystemsProgram } from './electronicsPrograms';
import { railwayProgram } from './railwayPrograms';

export type { SpecialtyProgram } from './specialtyProgramTypes';

export const specialtyPrograms: SpecialtyProgram[] = [
  motorsportProgram,
  aiProgram,
  psychologyProgram,
  aerospaceProgram,
  biomedicalScienceProgram,
  biomedicalEngineeringProgram,
  civilProgram,
  accountingProgram,
  semiconductorProgram,
  computerSystemsProgram,
  embeddedSystemsProgram,
  railwayProgram,
];

export const getSpecialtyProgramBySlug = (slug: string): SpecialtyProgram | undefined => {
  return specialtyPrograms.find(program => program.slug === slug);
};

export const getSpecialtyProgramById = (id: string): SpecialtyProgram | undefined => {
  return specialtyPrograms.find(program => program.id === id);
};

export {
  motorsportProgram,
  aiProgram,
  psychologyProgram,
  aerospaceProgram,
  biomedicalScienceProgram,
  biomedicalEngineeringProgram,
  civilProgram,
  accountingProgram,
  semiconductorProgram,
  computerSystemsProgram,
  embeddedSystemsProgram,
  railwayProgram,
};
