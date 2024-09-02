let labels: Record<string, string> = {
  "abdomen": "Buik",
  "abdominalDiscomfort": "Buikklachten",
  "abdominalDisordersInguinalCanalScrotum": "Aandoeningen buikwand / lieskanaal / scrotum",
  "abdominalPain": "Buikpijn",
  "abnormalCervicalSmear": "Afwijkend uitstrijkje",
  "abnormalFetalPosition": "Liggingsafwijking",
  "acne": "Acne",
  "acutePain": "Acute pijn",
  "adaptationAndProcessingProblems": "Aanpassings- en verwerkingsproblemen",
  "addictionAndPsychiatry": "Verslavingsproblemen",
  "additionalCare": "Aanvullende zorg",
  "adhd": "ADHD",
  "adults": "Volwassenen (18 - 65 jaar)",
  "allergicSkinDisorders": "Allergische huidaandoeningen",
  "allergologicalDisordersChild": "Allergologische aandoeningen kind",
  "allergology": "Allergologie",
  "allergyHyperreactivityUpperAirways": "Allergie / hyperreactiviteit bovenste luchtwegen",
  "anemia": "Anemie",
  "anesthesiologyPainMedicine": "Anesthesiologie, pijn- en palliatieve geneeskunde",
  "ankleFoot": "Enkel / voet",
  "anorexiaSlimming": "Anorexie / vermagering",
  "anxietyDisorders": "Angstklachten",
  "arterialDiseases": "Arteriële aandoeningen",
  "arthritides": "Artritiden",
  "assistiveDevices": "Hulpmiddelen",
  "asthma": "Astma",
  "asthmaCOPD": "Astma / COPD",
  "autism": "Autisme",
  "benignOrMalignantSkinDisorders": "Huidafwijkingen (benigne/ maligne)",
  "behaviouralDisorders": "Gedragsstoornissen",
  "behavorialDisorder": "Gedragsproblemen",
  "birthDefectsAndOrIntellectualDisabilities": "Aangeboren afwijkingen en/of verstandelijke  handicap",
  "bleeding": "Bloedverlies",
  "brain": "Hersenen",
  "breastAndOrOvarianCancer": "Borst- en/of eierstokkanker",
  "breastPathology": "Mammapathologie",
  "Breasts": "Mammae",
  "breastEnlargementOrReduction": "Borstvergroting/ -verkleining",
  "burdenedObstetricHistory": "Belaste verloskundige anamnese",
  "cancer": "Kanker",
  "cardiac": "Cardiaal",
  "cardiacArrhythmias": "Hartritmestoornissen",
  "cardiogenetics": "Cardiogenetica",
  "cardiology": "Cardiologie",
  "cardiomyopathy": "Cardiomyopathie",
  "cardiovascularDiseaseCvrm": "Hart- en vaatziekten / CVRM",
  "cardioVascularRisk": "Cardio-vasculair risico",
  "careRequestPenis": "Zorgvraag penis",
  "carpalTunnelSyndrome": "Carpaal tunnelsyndroom",
  "carpalTunnelSyndromeWithAbbreviation": "Carpaal Tunnel Syndroom (CTS)",
  "cataract": "Cataract",
  "cerebrovascular": "Cerebrovasculair",
  "cerebrovascularDisease": "Cerebrovasculaire aandoeningen",
  "cholestasis": "Cholestase",
  "chronicAbdominalPainConstipation": "Chronische buikpijn / obstipatie",
  "chronicDiarrhea": "Chronische diarree",
  "chronicFatigueOfUnknownOrigin": "Chronische vermoeidheid eci",
  "chronicPain": "Chronische pijn",
  "clinicalGenetics": "Klinische genetica",
  "clinicalNursing": "Specialistische verpleging",
  "coagulationDisorders": "Stollingsstoornissen",
  "cognitiveDevelopment": "Cognitieve ontwikkeling",
  "cognitiveImpairment": "Cognitieve problemen (o.a. dementie)",
  "colicUrolithiasis": "Koliek(en) / urolithiasis",
  "combinationBirthDefectsAndMentalRetardationOfUnknownOrigin": "Combinatie aangeboren afwijkingen(en) en verstandelijke  handicap eci",
  "complexHealthProblems": "Complexe gezondheidsproblemen",
  "contactLensProblems": "Contactlensproblemen",
  "contraception": "Anticonceptie",
  "copd": "COPD",
  "coughingOfUnknownOrigin": "Hoesten eci",
  "ct": "CT",
  "decreasedExerciseTolerance": "Verminderde inspanningstolerantie",
  "degenerativeDiseases": "Degeneratieve aandoeningen",
  "delirium": "Delier",
  "dementia": "Dementie",
  "dentalProsthesisProblems": "Gebits(prothese)problematiek",
  "dermatologicalDisordersChild": "Dermatologische aandoeningen kind",
  "dermatology": "Dermatologie",
  "dermatologyWounds": "Wondproblemen",
  "deviationsOralMucosaSkinHeadNeck": "Afwijkingen mondslijmvlies / huid hoofdhals",
  "diabetesMellitus": "Diabetes mellitus",
  "diabetesRelated": "Diabetesgerelateerd",
  "diabeticFoot": "Diabetische voet",
  "diagnostics": "Diagnostiek",
  "diarrhea": "Diarree",
  "dietetics": "Diëtetiek",
  "disabledCare": "Gehandicaptenzorg",
  "discongruentGrowth": "Discongruente groei",
  "disordersScrotumTestis": "Aandoeningen scrotum / testis",
  "dizziness": "Duizeligheid",
  "drugAllergy": "Geneesmiddelenallergie",
  "dupuytren": "Dupuytren",
  "dysphagia": "Dysfagie",
  "dyspneaOfUnknownOrigin": "Dyspnoe eci",
  "ears": "Oren",
  "eatingDisorder": "Eetproblemen",
  "eczematousDisorders": "Eczemateuze aandoeningen",
  "educationalProblems": "Opvoedingsproblemen",
  "elbow": "Elleboog",
  "elderly": "Ouderen (ouder dan 65 jaar)",
  "elevatedPSA": "Verhoogd PSA",
  "endocrineDisorders": "Endocriene aandoeningen",
  "endoscopy": "Endoscopie",
  "entDisordersChild": "KNO-aandoeningen kind",
  "entSurgery": "KNO-heelkunde",
  "epilepsy": "Epilepsie",
  "epistaxis": "Epistaxis",
  "excessSkin": "Overtollige huid",
  "eyelids": "Oogleden",
  "face": "Aangezicht",
  "facialTraumaPathology": "Trauma aangezichtspathologie",
  "faecalIncontinence": "Incontinentie voor faeces",
  "fainting": "Flauwvallen",
  "familyAndEnvironmentProblems": "Gezins- en omgevingsproblemen",
  "familyHistoryOfSuddenDeathAtYoungAge": "Plotse dood jonge leeftijd in familie",
  "female": "Vrouw",
  "feverOfUnknownOrigin": "Koorts eci",
  "fluorVaginalis": "Fluor vaginalis",
  "focalLiverAbnormalityOnUltrasound": "Focale leverafwijking op echo",
  "functionalDecline": "Functionele achteruitgang",
  "functionalDiagnostics": "Functieonderzoek",
  "gallstone": "Galsteenlijden",
  "gastrointestinalDisease": "Gastro-enterologische aandoeningen",
  "gastrointestinalLiverDiseases": "Maag-darm-leverziekten",
  "ganglion": "Ganglion",
  "geriatrics": "Geriatrie",
  "glandDisorder": "Speekselklierafwijkingen",
  "glaucoma": "Glaucoom",
  "growthDisorder": "Groeistoornis",
  "gyneacology": "Gynaecologie",
  "gyneacologyAndObstetrics": "Gynaecologie-verloskunde",
  "hairAndNailDisorders": "Haar- en nagelafwijkingen",
  "handWrist": "Hand / pols",
  "headache": "Hoofdpijn",
  "hearingImpairment": "Verminderde gehoorfunctie",
  "heartFailure": "Hartfalen",
  "heartMurmurValveDefects": "Souffle / klepgebreken",
  "hematologicalDiseases": "Hematologische aandoeningen",
  "hematuria": "Hematurie",
  "hyperemesis": "Hyperemesis",
  "hypermobility": "Hypermobiliteit",
  "hypertension": "Hypertensie",
  "impairedVisionRefractiveErrors": "Verminderde visus / refractieafwijkingen",
  "incontinence": "Incontinentie",
  "incontinenceProlapse": "Incontinentie / prolaps",
  "increasedSedimentation": "Verhoogde bezinking",
  "indicationMedicalHistory": "Belaste medische anamnese / medische indicatie",
  "infectionInflammation": "Infecties / ontstekingen",
  "infectiousDiseases": "Infectieziekten",
  "infertilityMan": "Infertiliteit man",
  "infertilitySubfertility": "Infertiliteit / subfertiliteit",
  "inflammationMouthHeadAndNeck": "Ontstekingen mond / hoofd-hals",
  "inflammatoryBackProblems": "Inflammatoire rugaandoeningen",
  "insectPoisonAllergy": "Insectengifallergie",
  "internalMedicine": "Interne geneeskunde",
  "intestinalCancer": "Darmkanker",
  "ironDeficiencyAnemia": "IJzergebreksanemie",
  "ischemicHeartDisease": "Ischaemische hartziekten",
  "isolatedBirthDefectOfUnknownOrigin": "Geïsoleerde aangeboren afwijking(en) eci",
  "isolatedMentalRetardationOfUnknownOrigin": "Geïsoleerde verstandelijke handicap eci",
  "jointsAndLigaments": "Gewrichten en ligamenten",
  "jointDisorders": "Gewrichtsaandoeningen",
  "knee": "Knie",
  "knownSyndromeOrChromosomalAbnormality": "Bekend syndroom of chromosomale afwijking",
  "laboratory": "Laboratorium",
  "lifestyleCoaching": "Leefstijlcoaching",
  "lifestyleGeneral": "Leefstijl algemeen",
  "limpingChild": "Mank lopend kind",
  "lipidMetabolismDisorders": "Vetstofwisselingsstoornissen",
  "liverFailure": "Leverfunctiestoornissen",
  "longTermStay": "Langdurend verblijf",
  "lowBackPainExclLrs": "Lage rugklachten (excl. LRS)",
  "lowerAbdominalPain": "Onderbuikpijn",
  "lowerBackSacrum": "Lage rug / sacrum",
  "lowerExtremities": "Onderste extremiteiten",
  "lowerRespiratoryTractInfection": "Onderste luchtweginfectie",
  "lowerUrinaryTractSymptoms": "Lower Urinary Tract Symptoms (LUTS)",
  "lungDiseases": "Longziekten",
  "male": "Man",
  "marfanAorticAbnormalities": "Marfan / aorta-afwijkingen",
  "maritalAndFamilyProblems": "Relatie- en gezinsproblemen",
  "medicalCare": "Medisch specialistische zorg",
  "memoryDisorderDementia": "Geheugenstoornis / dementie",
  "memoryImpairmentDementia": "Geheugenstoornis / dementie",
  "menopausalSymptoms": "Overgangsklachten",
  "minorProceduresOpthalmology": "Kleine verrichting oogheelkunde",
  "minorProceduresOrthopedics": "Kleine verrichting orthopedie",
  "minorSurgicalProcedures": "Kleine verrichtingen heelkunde",
  "moodDisorders": "Stemmingsklachten",
  "mri": "MRI",
  "multipleOrganDysfunction": "Multiple orgaanstoornissen",
  "multiplePregnancy": "Meerlingzwangerschap",
  "musculoskeletalDisorders": "Aandoeningen houdings- en bewegingsapparaat",
  "musculoskeletalSystem": "Bewegingsapparaat",
  "nasalCongestion": "Passagestoornissen neus",
  "neck": "Nek",
  "neglectAbuse": "Verwaarlozing / mishandeling / misbruik",
  "neurodegenerativeDiseases": "Neurodegeneratieve aandoeningen",
  "neurogenetics": "Neurogenetica",
  "neurologicalDisorders": "Neurologische aandoeningen",
  "neurology": "Neurologie - Neurochirurgie",
  "neuromuscularDisorders": "Neuromusculaire aandoeningen",
  "nuclearMedicine": "Nucleaire geneeskunde",
  "nursing": "Verpleging",
  "nursingCareAndHomeCare": "Verpleging, verzorging & thuiszorg",
  "nursingElderly": "Specialisme ouderengeneeskunde",
  "nutritionProblemsAllergy": "Voedingsproblemen / -allergie",
  "obesity": "Obesitas",
  "obstetrics": "Verloskunde",
  "occupationalTherapy": "Ergotherapie",
  "oncogenetics": "Oncogenetica",
  "oncologicalPain": "Oncologische pijn",
  "ophthalmicDisordersChild": "Oogheelkundige aandoeningen kind",
  "ophthalmology": "Oogheelkunde",
  "optometryAndOrthoptics": "Optometrie / orthoptie",
  "oralDiseasesJawFacialSurgery": "Mondziekten, Kaak- en Aangezichtschirurgie",
  "oralDiseasesJawFacialSurgeryChild": "MKA-aandoeningen kind",
  "orthopedics": "Orthopedie",
  "osteoporosis": "Osteoporose",
  "osteoporosisBoneDiseases": "Osteoporose / botziekten",
  "otherHealthcareRequestsClinicalGenetics": "Overige zorgvragen Klinische genetica",
  "otherHealthcareRequestsInternalMedicine": "Overige zorgvragen Interne geneeskunde",
  "otherHealthcareRequestsPediatrics": "Overige zorgvragen Kindergeneeskunde",
  "otherHealthcareRequestsOralDiseasesJawFacialSurgery": "Overige zorgvragen Mondziekten, kaak- en aangezichtschirurgie",
  "otherHealthcareRequestsOrthopedics": "Overige zorgvragen Orthopedie",
  "otherHealthcareRequestsPlasticSurgery": "Overige zorgvragen Plastische chirurgie",
  "otherHealthcareRequestsSportsMedicine": "Overige zorgvragen Sportgeneeskunde",
  "otherHealthcareRequestsUrology": "Overige zorgvragen Urologie",
  "otherHealthcareRequestsAllergology": "Overige zorgvragen Allergologie",
  "otherHealthcareRequestsAnesthesiologyPainMedicine": "Overige zorgvragen Anesthesiologie, pijn- en palliatieve geneeskunde",
  "otherHealthcareRequestsCardiology": "Overige zorgvragen Cardiologie",
  "otherHealthcareRequestsDermatology": "Overige zorgvragen Dermatologie",
  "otherHealthcareRequestsGeriatrics": "Overige zorgvragen Geriatrie",
  "otherHealthcareRequestsSurgery": "Overige zorgvragen Heelkunde",
  "otherHealthcareRequestsEntSurgery": "Overige zorgvragen KNO-heelkunde",
  "otherHealthcareRequestsMusculoskeletalSystem": "Overige zorgvragen Bewegingsapparaat",
  "otherHealthcareRequestsLungDiseases": "Overige zorgvragen Longziekten",
  "otherHealthcareRequestsGastrointestinalLiverDiseases": "Overige zorgvragen Maag-darm-leverziekten",
  "otherHealthcareRequestsNeurology": "Overige zorgvragen Neurologie",
  "otherHealthcareRequestsOphthalmology": "Overige zorgvragen Oogheelkunde",
  "otherHealthcareRequestsRheumatology": "Overige zorgvragen Reumatologie",
  "otherHealthcareRequestsRehabilitation": "Overige zorgvragen Revalidatiegeneeskunde",
  "otherHealthcareRequestsGynaecology": "Overige zorgvragen Gynaecologie",
  "otherHealthcareRequestsObstetrics": "Overige zorgvragen Verloskunde",
  "otherHealthcareRequestsEndocrineDisorders": "Overige zorgvragen Endocriene aandoeningen",
  "otherHealthcareRequestsHematologicalDiseases": "Overige zorgvragen Hematologische aandoeningen",
  "otherHealthcareRequestsVascularDiseases": "Overige zorgvragen Vasculaire aandoeningen",
  "otherHealthcareRequestsPediatricEndocrineDisorders": "Overige zorgvragen Kindergeneeskunde Endocriene aandoeningen",
  "otherHealthcareRequestsGastrointestinalDisease": "Overige zorgvragen Kindergeneeskunde Gastro-enterologische aandoeningen",
  "otherHealthcareRequestsNeurologicalDisorders": "Overige zorgvragen Kindergeneeskunde Neurologische aandoeningen",
  "otherHealthcareRequestsRehabilitationNeurologicalDisorders": "Overige zorgvragen Neurologische aandoeningen",
  "otherHealthcareRequestsRespiratoryDiseases": "Overige zorgvragen Kindergeneeskunde Respiratoire aandoeningen",
  "otherHealthcareRequestsUrologicalDisorders": "Overige zorgvragen Kindergeneeskunde Urologische aandoeningen",
  "otherHealthcareRequestsBirthDefectsAndOrIntellectualDisabilities": "Overige zorgvragen Aangeboren afwijkingen en/of verstandelijke handicap",
  "otherHealthcareRequestsCardiogenetics": "Overige zorgvragen Cardiogenetica",
  "otherHealthcareRequestsNeurogenetics": "Overige zorgvragen Neurogenetica",
  "otherHealthcareRequestsOncogenetics": "Overige zorgvragen Oncogenetica",
  "otherHealthcareRequestsSkeletalAndConnectiveTissueDisorders": "Overige zorgvragen Skelet- en bindweefselaandoeningen",
  "otherHealthcareRequestsJointDisorders": "Overige zorgvragen Gewrichtsaandoeningen",
  "otherHealthcareRequestsPediatricOrthopedicDiseases": "Overige zorgvragen Orthopedische aandoeningen kind",
  "otherHealthcareRequestsFace": "Overige zorgvragen Plastische chirurgie aangezicht",
  "otherHealthcareRequestsHands": "Overige zorgvragen Plastische chirurgie hand / pols",
  "otherHealthcareRequestsBreasts": "Overige zorgvragen Plastische chirurgie Mammae",
  "otherHealthcareRequestsSkin": "Overige zorgvragen Plastische chirurgie Huid",
  "otherHealthcareRequestsDecreasedExerciseTolerance": "Overige zorgvragen Sportgeneeskunde verminderde inspanningstolerantie",
  "otherHealthcareRequestsParamedicalCare": "Overige zorgvragen Paramedische zorg ",
  "otherHealthcareRequestsMentalHealth": "Overige zorgvragen Geestelijke gezondheidszorg",
  "otherHealthcareRequestsYouthCare": "Overige zorgvragen Jeugdzorg",
  "otherHealthcareRequestsNursingAndLiving": "Overige zorgvragen Verpleging & verzorging",
  "otherHealthcareRequestsStayingAndLiving": "Overige zorgvragen Verblijf & wonen",
  "otherHealthcareRequestsWelfareAndDevices": "Overige zorgvragen Welzijn",
  "outpatientTreatment": "Dagbehandeling",
  "overduePregnancy": "(Dreigende) serotiniteit",
  "overweightObesity": "Overgewicht / obesitas",
  "palliativeCare": "Palliatieve zorg",
  "palpableAbnormalityUterusAdnexa": "Palpabele afwijking uterus / adnexen",
  "paramedicalCare": "Paramedische zorg",
  "parkinsonism": "Bewegingsstoornis (incl. parkinsonisme)",
  "pediatricOrthopedicDiseases": "Orthopedische aandoeningen kind",
  "pediatricRehabilitation": "Kinderrevalidatie",
  "pediatrics": "Kindergeneeskunde",
  "pedicure": "Pedicure",
  "pelvicHipThigh": "Bekken / heup / bovenbeen",
  "peripheralNerves": "Perifere zenuwen",
  "peripheralPainSyndromesExclCts": "Perifere pijnsyndromen excl. CTS",
  "personalCare": "Persoonlijke verzorging",
  "personalityProblems": "Persoonlijkheidsproblemen",
  "physiotherapyAndExerciseTherapy": "Fysio- en oefentherapie",
  "pid": "PID",
  "plasticSurgery": "Plastische chirurgie",
  "podotherapy": "Podotherapie",
  "postMenopausal": "Cyclusstoorn./abn. vag. bloedverlies (post)menopauzaal",
  "postTrauma": "(Post) trauma",
  "preConceptionCounselling": "Preconceptioneel advies",
  "preMalignantSkinLesions": "(Pre)maligne huidafwijkingen",
  "prematureAtherosclerosis": "Premature atherosclerose",
  "premenopausal": "Cyclusstoorn./abn. vag. bloedverlies premenopauzaal",
  "premenstrualSyndrome": "PMS (premenstrueel syndroom)",
  "prenatalDiagnosticTesting": "Prenatale diagnostiek",
  "preventiveSportsMedicalExamination": "Preventief sportmedisch onderzoek",
  "problemsDuringLabour": "Problemen tijdens bevalling",
  "problemsInParentChildRelationship": "Problemen in ouder-kind relatie",
  "proctologicalDisorders": "Proctologische aandoeningen",
  "proctology": "Proctologie",
  "prosthesisComplaints": "Protheseklachten",
  "psoriasis": "Psoriasis",
  "psychiatricDisorders": "Psychiatrische aandoeningen",
  "psychiatryMentalHealth": "Geestelijke gezondheidszorg",
  "psychosis": "Psychose",
  "psychotraumaPsychoTraumaticSymptoms": "Psychotraumatische klachten",
  "puberty": "Puberteit",
  "pulmonary": "Pulmonaal",
  "quitSmoking": "Stoppen met roken",
  "radicularSyndrome": "Radiculair Syndroom",
  "radioTherapy": "Radiotherapie",
  "rectalBleeding": "Rectaal bloedverlies",
  "recurrentRespiratoryInfections": "Recidiverende luchtweginfecties",
  "redEye": "Rood oog / rode ogen",
  "reducedFetalMovement": "Minder leven",
  "refluxDyspepsiaUpperAbdominalPain": "Reflux / dyspepsie / bovenbuikspijn",
  "rehabilitation": "Revalidatiegeneeskunde",
  "rehabilitationOfSportsInjuries": "Revalidatie sportblessures",
  "renalDisease": "Nefrologische aandoeningen",
  "respiratoryDiseases": "Respiratoire aandoeningen",
  "rheumatologicalDisordersChild": "Reumatologische aandoeningen kind",
  "rheumatology": "Reumatologie",
  "salivaryGlandAbnormalities": "Speekselklierafwijkingen",
  "scars": "Littekens",
  "scoliosis": "Scoliose",
  "scrotalDisordersTestisPenis": "Aandoeningen scrotum / testis / penis",
  "sensoryDisorderPolyneuropathy": "Sensibele stoornis (polyneuropathie)",
  "sexualDisorder": "Seksuologische problemen",
  "sexualDysfunction": "Seksuele disfunctie",
  "sexualDysfunctionMaleImpotence": "Seksuele disfunctie man / impotentie",
  "shapeDeviationFace": "Vormafwijkingen gelaat",
  "shortTermStay": "Kortdurend verblijf",
  "shoulder": "Schouder",
  "sinus": "Sinus",
  "skeletal": "Skeletaal",
  "skeletalAndConnectiveTissueDisorders": "Skelet- en bindweefselaandoeningen",
  "skeletalDysplasia": "Skeletdysplasie",
  "skin": "Huid",
  "skinTherapy": "Huidtherapie",
  "sleepDisorders": "Slaapstoornissen",
  "smellTasteDisorders": "Reuk- / smaakstoornissen",
  "snoringComplaintsSleepApnea": "Snurkklachten / slaapapneu (OSAS)",
  "softTissue": "Weke delen",
  "softTissueDisorders": "Weke delen aandoeningen",
  "somatoformDisorder": "Somatoforme klachten",
  "speechTherapy": "Logopedie",
  "spinalCord": "Ruggenmerg",
  "spineTrunk": "Wervelkolom / romp",
  "sportsMedicalSupport": "Sportmedische begeleiding",
  "sportsMedicine": "Sportgeneeskunde",
  "spotsFlash": "Vlekken / Flitsen",
  "stayAndLiving": "Verblijf & wonen",
  "std": "SOA",
  "sterilizationMan": "Sterilisatie man",
  "sterilizationWoman": "Sterilisatie vrouw",
  "stomachache": "Buikpijn",
  "strabismusAndOrAmblyopia": "Strabismus en/of amblyopie",
  "surgery": "Heelkunde",
  "surgicalDiseasesChild": "Heelkundige aandoeningen kind",
  "surgicalWounds": "Wondproblemen",
  "suspectedAllergy": "(Verdenking) allergie",
  "suspectedAsthma": "Verdenking astma",
  "suspectedHereditaryIntestinalDiseases": "(Verdenking) erfelijke darmziekten",
  "suspectedHipDysplasia": "Verdenking heupdysplasie",
  "suspectedHematologicalMalignancy": "Verdenking hematologische maligniteit",
  "suspectedMalignancy": "Verdenking maligniteit",
  "suspectedMalignancyHemoptysis": "Verdenking maligniteit / hemoptoë",
  "swallowGlobusComplaints": "Slik- / globusklachten",
  "swellingHeadAndNeck": "Zwellingen hoofd-hals",
  "systemDisorders": "Systeem aandoeningen",
  "teleconsultation": "Teleconsultatie",
  "temporomandibularJointAbnormalities": "Kaakgewrichtsafwijkingen",
  "terminationOfPregnancy": "Zwangerschapsafbreking",
  "thoracicSpine": "Thoracale wervelkolom",
  "thorax": "Thorax",
  "threatenedMiscarriage": "(Dreigende) miskraam",
  "threatenedPretermLabour": "Dreigende vroeggeboorte",
  "thrombosis": "Trombose",
  "thyroidAbnormalities": "Schildklierafwijkingen",
  "thyroidDisease": "Schildklieraandoening",
  "tinnitus": "Oorsuizen",
  "trauma": "Trauma",
  "traumaEyeOrEyelid": "Ooglidafwijkingen / trauma oog(leden)",
  "traumatology": "Traumatologie",
  "triggerfinger": "Triggerfinger (TVS)",
  "ulcusCruris": "Ulcus cruris",
  "ultrasound": "Echo",
  "upperExtremities": "Bovenste extremiteiten",
  "upperRespiratoryTractProblems": "Bovenste luchtwegproblematiek",
  "urinaryTractInfection": "Urineweginfectie",
  "urologicalDisorders": "Urologische aandoeningen",
  "urologicalDisordersChild": "Urologische aandoeningen kind",
  "urology": "Urologie",
  "valveDefects": "Klepgebreken",
  "varices": "Varices",
  "vascularCare": "Vasculaire zorg",
  "vascularDiseases": "Vasculaire aandoeningen",
  "venousDisorders": "Veneuze aandoeningen",
  "voiceComplaintsAndOrLanguageDevelopment": "Stemklachten en/of taalontwikkelingsstoornissen",
  "vulvaDisease": "Vulva-problematiek",
  "walkingImpairmentFallFaintingDizziness": "Loopstoornissen / vallen / wegrakingen / duizeligheid",
  "warts": "Wratten",
  "weightLossOfUnkownOrigin": "Gewichtsdaling eci",
  "welfareServicesCourses": "Welzijn",
  "wristHand": "Pols / hand",
  "wound": "Wond",
  "xRayExamination": "Röntgenonderzoek",
  "youthCare": "Jeugdzorg"
}

let tree: {version: number, items: HCR[]} = {
  "version": 32,
  "items": [
    {
      "key": "diagnostics",
      "name": "",
      "type": "node",
      "code": "DGN",
      "chapterClassification": "diagnostics",
      "items": [
        {
          "key": "ct",
          "name": "",
          "type": "request",
          "code": "1ELBCT",
          "typesOfCare": [
            "Diagnostics"
          ],
          "licenses": [
            "1", "2", "3"
          ],
          "productType": [
            "DiagnosticTest"
          ]
        },
        {
          "key": "ultrasound",
          "name": "",
          "type": "request",
          "code": "1ELBEC",
          "typesOfCare": [
            "Diagnostics"
          ],
          "licenses": [
            "1", "2", "3"
          ],
          "productType": [
            "DiagnosticTest"
          ]
        },
        {
          "key": "endoscopy",
          "name": "",
          "type": "request",
          "code": "1ELEND",
          "typesOfCare": [
            "Diagnostics"
          ],
          "licenses": [
            "1", "2", "3"
          ],
          "productType": [
            "DiagnosticTest"
          ]
        },
        {
          "key": "functionalDiagnostics",
          "name": "",
          "type": "request",
          "code": "1ELFNC",
          "typesOfCare": [
            "Diagnostics"
          ],
          "licenses": [
            "1", "2", "3"
          ],
          "productType": [
            "DiagnosticTest"
          ]
        },
        {
          "key": "laboratory",
          "name": "",
          "type": "request",
          "code": "1ELKLC",
          "typesOfCare": [
            "Diagnostics",
            "LaboratoryDiagnostics"
          ],
          "licenses": [
            "1", "2", "3"
          ],
          "productType": [
            "DiagnosticTest",
            "LaboratoryTest"
          ]
        },
        {
          "key": "mri",
          "name": "",
          "type": "request",
          "code": "1ELMRI",
          "typesOfCare": [
            "Diagnostics"
          ],
          "licenses": [
            "1", "2", "3"
          ],
          "productType": [
            "DiagnosticTest"
          ]
        },
        {
          "key": "nuclearMedicine",
          "name": "",
          "type": "request",
          "code": "NUCOVE",
          "typesOfCare": [
            "Diagnostics"
          ],
          "licenses": [
            "1", "2", "3"
          ],
          "productType": [
            "DiagnosticTest"
          ]
        },
        {
          "key": "xRayExamination",
          "name": "",
          "type": "request",
          "code": "1ELRON",
          "typesOfCare": [
            "Diagnostics"
          ],
          "licenses": [
            "1", "2", "3"
          ],
          "productType": [
            "DiagnosticTest"
          ]
        }
      ]
    },
    {
      "key": "teleconsultation",
      "name": "",
      "type": "request",
      "code": "1ELTLC",
      "chapterClassification": "teleconsultation",
      "typesOfCare": [
        "TeleConsultation"
      ],
      "licenses": [
        "4", "23"
      ],
      "productType": [
        "AdvisoryConsult",
        "Teleconsult"
      ]
    },
    {
      "key": "medicalCare",
      "name": "",
      "type": "node",
      "code": "MSZ",
      "chapterClassification": "specialistcare",
      "items": [
        {
          "key": "allergology",
          "name": "",
          "type": "node",
          "code": "ALL",
          "items": [
            {
              "key": "allergyHyperreactivityUpperAirways",
              "name": "",
              "type": "request",
              "code": "ALLALL",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "allergicSkinDisorders",
              "name": "",
              "type": "request",
              "code": "ALLAHU",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "allergologicalDisordersChild",
              "name": "",
              "type": "request",
              "code": "ALLAKI",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ],
              "age": ["Y"]
            },
            {
              "key": "asthma",
              "name": "",
              "type": "request",
              "code": "ALLAST",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "drugAllergy",
              "name": "",
              "type": "request",
              "code": "ALLGEN",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "insectPoisonAllergy",
              "name": "",
              "type": "request",
              "code": "ALLINS",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "nutritionProblemsAllergy",
              "name": "",
              "type": "request",
              "code": "ALLVOE",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "otherHealthcareRequestsAllergology",
              "name": "",
              "type": "request",
              "code": "ALLOVE",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            }
          ]
        },
        {
          "key": "anesthesiologyPainMedicine",
          "name": "",
          "type": "node",
          "code": "ANE",
          "chapterClassification": "specialistcare",
          "items": [
            {
              "key": "acutePain",
              "name": "",
              "type": "request",
              "code": "ANEACU",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "chronicPain",
              "name": "",
              "type": "request",
              "code": "ANECHR",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "oncologicalPain",
              "name": "",
              "type": "request",
              "code": "ANEONC",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "otherHealthcareRequestsAnesthesiologyPainMedicine",
              "name": "",
              "type": "request",
              "code": "ANEOVE",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            }
          ]
        },
        {
          "key": "cardiology",
          "name": "",
          "type": "node",
          "code": "CAR",
          "chapterClassification": "specialistcare",
          "items": [
            {
              "key": "cardioVascularRisk",
              "name": "",
              "type": "request",
              "code": "CARCVR",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "heartFailure",
              "name": "",
              "type": "request",
              "code": "CARHAR",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "cardiacArrhythmias",
              "name": "",
              "type": "request",
              "code": "CARHRI",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "hypertension",
              "name": "",
              "type": "request",
              "code": "CARHYP",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "ischemicHeartDisease",
              "name": "",
              "type": "request",
              "code": "CARISC",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "valveDefects",
              "name": "",
              "type": "request",
              "code": "CARKLE",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "otherHealthcareRequestsCardiology",
              "name": "",
              "type": "request",
              "code": "CAROVE",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            }
          ]
        },
        {
          "key": "dermatology",
          "name": "",
          "type": "node",
          "code": "DER",
          "chapterClassification": "specialistcare",
          "items": [
            {
              "key": "acne",
              "name": "",
              "type": "request",
              "code": "DERACN",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "allergicSkinDisorders",
              "name": "",
              "type": "request",
              "code": "DERALL",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "dermatologicalDisordersChild",
              "name": "",
              "type": "request",
              "code": "DERAKI",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ],
              "age": ["Y"]
            },
            {
              "key": "eczematousDisorders",
              "name": "",
              "type": "request",
              "code": "DERECZ",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "hairAndNailDisorders",
              "name": "",
              "type": "request",
              "code": "DERHAA",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "preMalignantSkinLesions",
              "name": "",
              "type": "request",
              "code": "DERMAL",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "proctology",
              "name": "",
              "type": "request",
              "code": "DERPRO",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "psoriasis",
              "name": "",
              "type": "request",
              "code": "DERPSO",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "std",
              "name": "",
              "type": "request",
              "code": "DERSEK",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "ulcusCruris",
              "name": "",
              "type": "request",
              "code": "DERULC",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "varices",
              "name": "",
              "type": "request",
              "code": "DERVAR",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "vulvaDisease",
              "name": "",
              "type": "request",
              "code": "DERVUL",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ],
              "gender": "F"
            },
            {
              "key": "dermatologyWounds",
              "name": "",
              "type": "request",
              "code": "DERWON",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "warts",
              "name": "",
              "type": "request",
              "code": "DERWRA",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "otherHealthcareRequestsDermatology",
              "name": "",
              "type": "request",
              "code": "DEROVE",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            }
          ]
        },
        {
          "key": "geriatrics",
          "name": "",
          "type": "node",
          "code": "GER",
          "chapterClassification": "specialistcare",
          "items": [
            {
              "key": "delirium",
              "name": "",
              "type": "request",
              "code": "GERDEL",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ],
              "age": ["A", "S"]
            },
            {
              "key": "functionalDecline",
              "name": "",
              "type": "request",
              "code": "GERFUN",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ],
              "age": ["A", "S"]
            },
            {
              "key": "behaviouralDisorders",
              "name": "",
              "type": "request",
              "code": "GERGED",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ],
              "age": ["A", "S"]
            },
            {
              "key": "memoryImpairmentDementia",
              "name": "",
              "type": "request",
              "code": "GERGEH",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ],
              "age": ["A", "S"]
            },
            {
              "key": "walkingImpairmentFallFaintingDizziness",
              "name": "",
              "type": "request",
              "code": "GERLOO",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ],
              "age": ["A", "S"]
            },
            {
              "key": "multipleOrganDysfunction",
              "name": "",
              "type": "request",
              "code": "GERMUL",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ],
              "age": ["A", "S"]
            },
            {
              "key": "moodDisorders",
              "name": "",
              "type": "request",
              "code": "GERSTE",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ],
              "age": ["A", "S"]
            },
            {
              "key": "otherHealthcareRequestsGeriatrics",
              "name": "",
              "type": "request",
              "code": "GEROVE",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ],
              "age": ["A", "S"]
            }
          ]
        },
        {
          "key": "gyneacologyAndObstetrics",
          "name": "",
          "type": "node",
          "code": "GYN",
          "chapterClassification": "specialistcare",
          "items": [
            {
              "key": "gyneacology",
              "name": "",
              "type": "node",
              "code": "GYNCATGYN",
              "items": [
                {
                  "key": "abnormalCervicalSmear",
                  "name": "",
                  "type": "request",
                  "code": "GYNAFW",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "gender": "F"
                },
                {
                  "key": "contraception",
                  "name": "",
                  "type": "request",
                  "code": "GYNIUD",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "gender": "F"
                },
                {
                  "key": "postMenopausal",
                  "name": "",
                  "type": "request",
                  "code": "GYNPOS",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "gender": "F"
                },
                {
                  "key": "premenopausal",
                  "name": "",
                  "type": "request",
                  "code": "GYNPRM",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "gender": "F"
                },
                {
                  "key": "fluorVaginalis",
                  "name": "",
                  "type": "request",
                  "code": "GYNFLV",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "gender": "F"
                },
                {
                  "key": "incontinenceProlapse",
                  "name": "",
                  "type": "request",
                  "code": "GYNINC",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "gender": "F"
                },
                {
                  "key": "infertilitySubfertility",
                  "name": "",
                  "type": "request",
                  "code": "GYNINF",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "lowerAbdominalPain",
                  "name": "",
                  "type": "request",
                  "code": "GYNONB",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "gender": "F"
                },
                {
                  "key": "menopausalSymptoms",
                  "name": "",
                  "type": "request",
                  "code": "GYNOVG",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "gender": "F"
                },
                {
                  "key": "palpableAbnormalityUterusAdnexa",
                  "name": "",
                  "type": "request",
                  "code": "GYNPAL",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "gender": "F"
                },
                {
                  "key": "pid",
                  "name": "",
                  "type": "request",
                  "code": "GYNPID",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "gender": "F"
                },
                {
                  "key": "premenstrualSyndrome",
                  "name": "",
                  "type": "request",
                  "code": "GYNPMS",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "gender": "F"
                },
                {
                  "key": "preConceptionCounselling",
                  "name": "",
                  "type": "request",
                  "code": "GYNPRA",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "gender": "F"
                },
                {
                  "key": "prenatalDiagnosticTesting",
                  "name": "",
                  "type": "request",
                  "code": "GYNPRE",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "gender": "F"
                },
                {
                  "key": "sexualDysfunction",
                  "name": "",
                  "type": "request",
                  "code": "GYNSEK",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "std",
                  "name": "",
                  "type": "request",
                  "code": "GYNSOA",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "gender": "F"
                },
                {
                  "key": "sterilizationWoman",
                  "name": "",
                  "type": "request",
                  "code": "GYNSTE",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "gender": "F"
                },
                {
                  "key": "vulvaDisease",
                  "name": "",
                  "type": "request",
                  "code": "GYNVUL",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "gender": "F"
                },
                {
                  "key": "otherHealthcareRequestsGynaecology",
                  "name": "",
                  "type": "request",
                  "code": "GYNOVE",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "gender": "F"
                }
              ]
            },
            {
              "key": "obstetrics",
              "name": "",
              "type": "node",
              "code": "GYNCATOBS",
              "items": [
                {
                  "key": "indicationMedicalHistory",
                  "name": "",
                  "type": "request",
                  "code": "GYNBMA",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "gender": "F"
                },
                {
                  "key": "burdenedObstetricHistory",
                  "name": "",
                  "type": "request",
                  "code": "GYNBVA",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "gender": "F"
                },
                {
                  "key": "bleeding",
                  "name": "",
                  "type": "request",
                  "code": "GYNBLO",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "gender": "F"
                },
                {
                  "key": "discongruentGrowth",
                  "name": "",
                  "type": "request",
                  "code": "GYNDIS",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "gender": "F"
                },
                {
                  "key": "threatenedMiscarriage",
                  "name": "",
                  "type": "request",
                  "code": "GYNDMI",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "overduePregnancy",
                  "name": "",
                  "type": "request",
                  "code": "GYNSER",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "gender": "F"
                },
                {
                  "key": "threatenedPretermLabour",
                  "name": "",
                  "type": "request",
                  "code": "GYNDVG",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "gender": "F"
                },
                {
                  "key": "hyperemesis",
                  "name": "",
                  "type": "request",
                  "code": "GYNHYM",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "abnormalFetalPosition",
                  "name": "",
                  "type": "request",
                  "code": "GYNLIG",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "gender": "F"
                },
                {
                  "key": "multiplePregnancy",
                  "name": "",
                  "type": "request",
                  "code": "GYNMEE",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "gender": "F"
                },
                {
                  "key": "reducedFetalMovement",
                  "name": "",
                  "type": "request",
                  "code": "GYNMIN",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "gender": "F"
                },
                {
                  "key": "problemsDuringLabour",
                  "name": "",
                  "type": "request",
                  "code": "GYNPRO",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "gender": "F"
                },
                {
                  "key": "terminationOfPregnancy",
                  "name": "",
                  "type": "request",
                  "code": "GYNZAF",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "gender": "F"
                },
                {
                  "key": "otherHealthcareRequestsObstetrics",
                  "name": "",
                  "type": "request",
                  "code": "GYNOV2",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "gender": "F"
                }
              ]
            }
          ]
        },
        {
          "key": "surgery",
          "name": "",
          "type": "node",
          "code": "CHI",
          "chapterClassification": "specialistcare",
          "items": [
            {
              "key": "abdominalDisordersInguinalCanalScrotum",
              "name": "",
              "type": "request",
              "code": "CHIAAN",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "arterialDiseases",
              "name": "",
              "type": "request",
              "code": "CHIART",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "stomachache",
              "name": "",
              "type": "request",
              "code": "CHIBUI",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "diabeticFoot",
              "name": "",
              "type": "request",
              "code": "CHIDIA",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "gallstone",
              "name": "",
              "type": "request",
              "code": "CHIGAL",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "surgicalDiseasesChild",
              "name": "",
              "type": "request",
              "code": "CHIAKI",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ],
              "age": ["Y"]
            },
            {
              "key": "minorSurgicalProcedures",
              "name": "",
              "type": "request",
              "code": "CHIKVH",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "breastPathology",
              "name": "",
              "type": "request",
              "code": "CHIMAM",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "obesity",
              "name": "",
              "type": "request",
              "code": "CHIOBE",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "proctologicalDisorders",
              "name": "",
              "type": "request",
              "code": "CHIPRO",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "traumatology",
              "name": "",
              "type": "request",
              "code": "CHITRA",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "venousDisorders",
              "name": "",
              "type": "request",
              "code": "CHIVEN",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "surgicalWounds",
              "name": "",
              "type": "request",
              "code": "CHIWON",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "otherHealthcareRequestsSurgery",
              "name": "",
              "type": "request",
              "code": "CHIOVE",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            }
          ]
        },
        {
          "key": "internalMedicine",
          "name": "",
          "type": "node",
          "code": "INT",
          "chapterClassification": "specialistcare",
          "items": [
            {
              "key": "abdominalDiscomfort",
              "name": "",
              "type": "request",
              "code": "INTBUI",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "chronicFatigueOfUnknownOrigin",
              "name": "",
              "type": "request",
              "code": "INTCHR",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "endocrineDisorders",
              "name": "",
              "type": "node",
              "code": "INTCATEND",
              "items": [
                {
                  "key": "diabetesMellitus",
                  "name": "",
                  "type": "request",
                  "code": "INTDIA",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "osteoporosis",
                  "name": "",
                  "type": "request",
                  "code": "INTOST",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "thyroidAbnormalities",
                  "name": "",
                  "type": "request",
                  "code": "INTSCH",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "otherHealthcareRequestsEndocrineDisorders",
                  "name": "",
                  "type": "request",
                  "code": "INTOV1",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                }
              ]
            },
            {
              "key": "weightLossOfUnkownOrigin",
              "name": "",
              "type": "request",
              "code": "INTGEW",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "hematologicalDiseases",
              "name": "",
              "type": "node",
              "code": "INTCATHEM",
              "items": [
                {
                  "key": "anemia",
                  "name": "",
                  "type": "request",
                  "code": "INTANE",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "ironDeficiencyAnemia",
                  "name": "",
                  "type": "request",
                  "code": "INTIJZ",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "coagulationDisorders",
                  "name": "",
                  "type": "request",
                  "code": "INTSTO",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "suspectedHematologicalMalignancy",
                  "name": "",
                  "type": "request",
                  "code": "INTVHM",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "increasedSedimentation",
                  "name": "",
                  "type": "request",
                  "code": "INTVBE",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "otherHealthcareRequestsHematologicalDiseases",
                  "name": "",
                  "type": "request",
                  "code": "INTOV2",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                }
              ]
            },
            {
              "key": "infectiousDiseases",
              "name": "",
              "type": "request",
              "code": "INTINF",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "feverOfUnknownOrigin",
              "name": "",
              "type": "request",
              "code": "INTKOO",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "renalDisease",
              "name": "",
              "type": "request",
              "code": "INTNEF",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "obesity",
              "name": "",
              "type": "request",
              "code": "INTOBE",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "vascularDiseases",
              "name": "",
              "type": "node",
              "code": "INTCATVAS",
              "items": [
                {
                  "key": "hypertension",
                  "name": "",
                  "type": "request",
                  "code": "INTHYP",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "thrombosis",
                  "name": "",
                  "type": "request",
                  "code": "INTTRO",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "vascularCare",
                  "name": "",
                  "type": "request",
                  "code": "INTVAS",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "lipidMetabolismDisorders",
                  "name": "",
                  "type": "request",
                  "code": "INTVET",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "otherHealthcareRequestsVascularDiseases",
                  "name": "",
                  "type": "request",
                  "code": "INTOV4",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                }
              ]
            },
            {
              "key": "otherHealthcareRequestsInternalMedicine",
              "name": "",
              "type": "request",
              "code": "INTOV3",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            }
          ]
        },
        {
          "key": "pediatrics",
          "name": "",
          "type": "node",
          "code": "PED",
          "chapterClassification": "specialistcare",
          "items": [
            {
              "key": "adhd",
              "name": "",
              "type": "request",
              "code": "PEDADH",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ],
              "age": ["Y"]
            },
            {
              "key": "endocrineDisorders",
              "name": "",
              "type": "node",
              "code": "PEDCATEND",
              "items": [
                {
                  "key": "growthDisorder",
                  "name": "",
                  "type": "request",
                  "code": "PEDEGR",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "age": ["Y"]
                },
                {
                  "key": "puberty",
                  "name": "",
                  "type": "request",
                  "code": "PEDEPU",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "age": ["Y"]
                },
                {
                  "key": "thyroidDisease",
                  "name": "",
                  "type": "request",
                  "code": "PEDESC",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "age": ["Y"]
                },
                {
                  "key": "otherHealthcareRequestsPediatricEndocrineDisorders",
                  "name": "",
                  "type": "request",
                  "code": "PEDEOV",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "age": ["Y"]
                }
              ]
            },
            {
              "key": "gastrointestinalDisease",
              "name": "",
              "type": "node",
              "code": "PEDCATGAS",
              "items": [
                {
                  "key": "chronicAbdominalPainConstipation",
                  "name": "",
                  "type": "request",
                  "code": "PEDCHR",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "age": ["Y"]
                },
                {
                  "key": "diarrhea",
                  "name": "",
                  "type": "request",
                  "code": "PEDEDI",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "age": ["Y"]
                },
                {
                  "key": "nutritionProblemsAllergy",
                  "name": "",
                  "type": "request",
                  "code": "PEDVOE",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "age": ["Y"]
                },
                {
                  "key": "otherHealthcareRequestsGastrointestinalDisease",
                  "name": "",
                  "type": "request",
                  "code": "PEDOV2",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "age": ["Y"]
                }
              ]
            },
            {
              "key": "neurologicalDisorders",
              "name": "",
              "type": "node",
              "code": "PEDCATNEU",
              "items": [
                {
                  "key": "headache",
                  "name": "",
                  "type": "request",
                  "code": "PEDHOO",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "age": ["Y"]
                },
                {
                  "key": "otherHealthcareRequestsNeurologicalDisorders",
                  "name": "",
                  "type": "request",
                  "code": "PEDOV3",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "age": ["Y"]
                }
              ]
            },
            {
              "key": "overweightObesity",
              "name": "",
              "type": "request",
              "code": "PEDOVG",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ],
              "age": ["Y"]
            },
            {
              "key": "respiratoryDiseases",
              "name": "",
              "type": "node",
              "code": "PEDCATRES",
              "items": [
                {
                  "key": "upperRespiratoryTractProblems",
                  "name": "",
                  "type": "request",
                  "code": "PEDLBL",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "age": ["Y"]
                },
                {
                  "key": "recurrentRespiratoryInfections",
                  "name": "",
                  "type": "request",
                  "code": "PEDLRE",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "age": ["Y"]
                },
                {
                  "key": "suspectedAsthma",
                  "name": "",
                  "type": "request",
                  "code": "PEDLVA",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "age": ["Y"]
                },
                {
                  "key": "otherHealthcareRequestsRespiratoryDiseases",
                  "name": "",
                  "type": "request",
                  "code": "PEDLOV",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "age": ["Y"]
                }
              ]
            },
            {
              "key": "heartMurmurValveDefects",
              "name": "",
              "type": "request",
              "code": "PEDSOU",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ],
              "age": ["Y"]
            },
            {
              "key": "urologicalDisorders",
              "name": "",
              "type": "node",
              "code": "PEDCATURO",
              "items": [
                {
                  "key": "scrotalDisordersTestisPenis",
                  "name": "",
                  "type": "request",
                  "code": "PEDUAS",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "age": ["Y"],
                  "gender": "M"
                },
                {
                  "key": "incontinence",
                  "name": "",
                  "type": "request",
                  "code": "PEDUIC",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "age": ["Y"]
                },
                {
                  "key": "urinaryTractInfection",
                  "name": "",
                  "type": "request",
                  "code": "PEDUUW",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "age": ["Y"]
                },
                {
                  "key": "otherHealthcareRequestsUrologicalDisorders",
                  "name": "",
                  "type": "request",
                  "code": "PEDUOV",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "age": ["Y"]
                }
              ]
            },
            {
              "key": "suspectedAllergy",
              "name": "",
              "type": "request",
              "code": "PEDALL",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ],
              "age": ["Y"]
            },
            {
              "key": "otherHealthcareRequestsPediatrics",
              "name": "",
              "type": "request",
              "code": "PEDOV4",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ],
              "age": ["Y"]
            }
          ]
        },
        {
          "key": "clinicalGenetics",
          "name": "",
          "type": "node",
          "code": "KGE",
          "chapterClassification": "specialistcare",
          "items": [
            {
              "key": "birthDefectsAndOrIntellectualDisabilities",
              "name": "",
              "type": "node",
              "code": "KGECATBIR",
              "items": [
                {
                  "key": "knownSyndromeOrChromosomalAbnormality",
                  "name": "",
                  "type": "request",
                  "code": "KGESYN",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "combinationBirthDefectsAndMentalRetardationOfUnknownOrigin",
                  "name": "",
                  "type": "request",
                  "code": "KGECOA",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "isolatedBirthDefectOfUnknownOrigin",
                  "name": "",
                  "type": "request",
                  "code": "KGEGAA",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "isolatedMentalRetardationOfUnknownOrigin",
                  "name": "",
                  "type": "request",
                  "code": "KGEVHA",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "otherHealthcareRequestsBirthDefectsAndOrIntellectualDisabilities",
                  "name": "",
                  "type": "request",
                  "code": "KGAOVE",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                }
              ]
            },
            {
              "key": "cardiogenetics",
              "name": "",
              "type": "node",
              "code": "KGECATCAR",
              "items": [
                {
                  "key": "cardiomyopathy",
                  "name": "",
                  "type": "request",
                  "code": "KGECCA",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "cardiacArrhythmias",
                  "name": "",
                  "type": "request",
                  "code": "KGECHA",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "marfanAorticAbnormalities",
                  "name": "",
                  "type": "request",
                  "code": "KGECMA",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "familyHistoryOfSuddenDeathAtYoungAge",
                  "name": "",
                  "type": "request",
                  "code": "KGECPL",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "prematureAtherosclerosis",
                  "name": "",
                  "type": "request",
                  "code": "KGECPA",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "otherHealthcareRequestsCardiogenetics",
                  "name": "",
                  "type": "request",
                  "code": "KGECOV",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                }
              ]
            },
            {
              "key": "neurogenetics",
              "name": "",
              "type": "node",
              "code": "KGECATNEU",
              "items": [
                {
                  "key": "cerebrovascular",
                  "name": "",
                  "type": "request",
                  "code": "KGENCE",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "epilepsy",
                  "name": "",
                  "type": "request",
                  "code": "KGENEP",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "neurodegenerativeDiseases",
                  "name": "",
                  "type": "request",
                  "code": "KGENNE",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "neuromuscularDisorders",
                  "name": "",
                  "type": "request",
                  "code": "KGENNA",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "psychiatricDisorders",
                  "name": "",
                  "type": "request",
                  "code": "KGENPY",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "otherHealthcareRequestsNeurogenetics",
                  "name": "",
                  "type": "request",
                  "code": "KGENOV",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                }
              ]
            },
            {
              "key": "oncogenetics",
              "name": "",
              "type": "node",
              "code": "KGECATONC",
              "items": [
                {
                  "key": "breastAndOrOvarianCancer",
                  "name": "",
                  "type": "request",
                  "code": "KGEOBO",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "gender": "F"
                },
                {
                  "key": "intestinalCancer",
                  "name": "",
                  "type": "request",
                  "code": "KGEODA",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "otherHealthcareRequestsOncogenetics",
                  "name": "",
                  "type": "request",
                  "code": "KGEOOV",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                }
              ]
            },
            {
              "key": "preConceptionCounselling",
              "name": "",
              "type": "request",
              "code": "KGEPCC",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "skeletalAndConnectiveTissueDisorders",
              "name": "",
              "type": "node",
              "code": "KGECATSKE",
              "items": [
                {
                  "key": "hypermobility",
                  "name": "",
                  "type": "request",
                  "code": "KGESHY",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "skeletalDysplasia",
                  "name": "",
                  "type": "request",
                  "code": "KGESSK",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "otherHealthcareRequestsSkeletalAndConnectiveTissueDisorders",
                  "name": "",
                  "type": "request",
                  "code": "KGESOV",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                }
              ]
            },
            {
              "key": "otherHealthcareRequestsClinicalGenetics",
              "name": "",
              "type": "request",
              "code": "KGEOVE",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            }
          ]
        },
        {
          "key": "entSurgery",
          "name": "",
          "type": "node",
          "code": "KNO",
          "chapterClassification": "specialistcare",
          "items": [
            {
              "key": "allergyHyperreactivityUpperAirways",
              "name": "",
              "type": "request",
              "code": "KNOALL",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "dizziness",
              "name": "",
              "type": "request",
              "code": "KNODUI",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "epistaxis",
              "name": "",
              "type": "request",
              "code": "KNOEPI",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "infectionInflammation",
              "name": "",
              "type": "request",
              "code": "KNOINF",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "entDisordersChild",
              "name": "",
              "type": "request",
              "code": "KNOPED",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ],
              "age": ["Y"]
            },
            {
              "key": "tinnitus",
              "name": "",
              "type": "request",
              "code": "KNOOOR",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "nasalCongestion",
              "name": "",
              "type": "request",
              "code": "KNOPAS",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "smellTasteDisorders",
              "name": "",
              "type": "request",
              "code": "KNOREU",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "swallowGlobusComplaints",
              "name": "",
              "type": "request",
              "code": "KNOSLI",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "snoringComplaintsSleepApnea",
              "name": "",
              "type": "request",
              "code": "KNOSNU",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "glandDisorder",
              "name": "",
              "type": "request",
              "code": "KNOSPE",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "voiceComplaintsAndOrLanguageDevelopment",
              "name": "",
              "type": "request",
              "code": "KNOSTE",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "trauma",
              "name": "",
              "type": "request",
              "code": "KNOTRA",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "suspectedMalignancy",
              "name": "",
              "type": "request",
              "code": "KNOVEM",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "hearingImpairment",
              "name": "",
              "type": "request",
              "code": "KNOVER",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "swellingHeadAndNeck",
              "name": "",
              "type": "request",
              "code": "KNOZWE",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "otherHealthcareRequestsEntSurgery",
              "name": "",
              "type": "request",
              "code": "KNOOVE",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            }
          ]
        },
        {
          "key": "lungDiseases",
          "name": "",
          "type": "node",
          "code": "LNG",
          "chapterClassification": "specialistcare",
          "items": [
            {
              "key": "asthma",
              "name": "",
              "type": "request",
              "code": "LNGAST",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "copd",
              "name": "",
              "type": "request",
              "code": "LNGCOPD",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "dyspneaOfUnknownOrigin",
              "name": "",
              "type": "request",
              "code": "LNGDYS",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "coughingOfUnknownOrigin",
              "name": "",
              "type": "request",
              "code": "LNGHOE",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "lowerRespiratoryTractInfection",
              "name": "",
              "type": "request",
              "code": "LNGOND",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "snoringComplaintsSleepApnea",
              "name": "",
              "type": "request",
              "code": "LNGSNU",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "quitSmoking",
              "name": "",
              "type": "request",
              "code": "LNGSTO",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "suspectedMalignancyHemoptysis",
              "name": "",
              "type": "request",
              "code": "LNGVER",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "otherHealthcareRequestsLungDiseases",
              "name": "",
              "type": "request",
              "code": "LNGOVE",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            }
          ]
        },
        {
          "key": "gastrointestinalLiverDiseases",
          "name": "",
          "type": "node",
          "code": "GAS",
          "chapterClassification": "specialistcare",
          "items": [
            {
              "key": "anorexiaSlimming",
              "name": "",
              "type": "request",
              "code": "GASANO",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "abdominalPain",
              "name": "",
              "type": "request",
              "code": "GASBUI",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "cholestasis",
              "name": "",
              "type": "request",
              "code": "GASCHO",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "chronicDiarrhea",
              "name": "",
              "type": "request",
              "code": "GASCHR",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "dysphagia",
              "name": "",
              "type": "request",
              "code": "GASDYS",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "focalLiverAbnormalityOnUltrasound",
              "name": "",
              "type": "request",
              "code": "GASFOC",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "ironDeficiencyAnemia",
              "name": "",
              "type": "request",
              "code": "GASIJZ",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "faecalIncontinence",
              "name": "",
              "type": "request",
              "code": "GASINC",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "liverFailure",
              "name": "",
              "type": "request",
              "code": "GASLEV",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "rectalBleeding",
              "name": "",
              "type": "request",
              "code": "GASREC",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "refluxDyspepsiaUpperAbdominalPain",
              "name": "",
              "type": "request",
              "code": "GASREF",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "suspectedHereditaryIntestinalDiseases",
              "name": "",
              "type": "request",
              "code": "GASVED",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "otherHealthcareRequestsGastrointestinalLiverDiseases",
              "name": "",
              "type": "request",
              "code": "GASOVE",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            }
          ]
        },
        {
          "key": "oralDiseasesJawFacialSurgery",
          "name": "",
          "type": "node",
          "code": "KCH",
          "chapterClassification": "specialistcare",
          "items": [
            {
              "key": "deviationsOralMucosaSkinHeadNeck",
              "name": "",
              "type": "request",
              "code": "KCHAFO",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "dentalProsthesisProblems",
              "name": "",
              "type": "request",
              "code": "KCHGEB",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "temporomandibularJointAbnormalities",
              "name": "",
              "type": "request",
              "code": "KCHKAA",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "oralDiseasesJawFacialSurgeryChild",
              "name": "",
              "type": "request",
              "code": "KCHKIN",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ],
              "age": ["Y"]
            },
            {
              "key": "inflammationMouthHeadAndNeck",
              "name": "",
              "type": "request",
              "code": "KCHOMH",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "snoringComplaintsSleepApnea",
              "name": "",
              "type": "request",
              "code": "KCHSNU",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "salivaryGlandAbnormalities",
              "name": "",
              "type": "request",
              "code": "KCHSPE",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "facialTraumaPathology",
              "name": "",
              "type": "request",
              "code": "KCHAAN",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "shapeDeviationFace",
              "name": "",
              "type": "node",
              "code": "KCHCATSHA",
              "items": [
                {
                  "key": "skeletal",
                  "name": "",
                  "type": "request",
                  "code": "KCHVOS",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "softTissue",
                  "name": "",
                  "type": "request",
                  "code": "KCHVOW",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                }
              ]
            },
            {
              "key": "swellingHeadAndNeck",
              "name": "",
              "type": "request",
              "code": "KCHZWE",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "otherHealthcareRequestsOralDiseasesJawFacialSurgery",
              "name": "",
              "type": "request",
              "code": "KCHOVE",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            }
          ]
        },
        {
          "key": "neurology",
          "name": "",
          "type": "node",
          "code": "NEU",
          "chapterClassification": "specialistcare",
          "items": [
            {
              "key": "parkinsonism",
              "name": "",
              "type": "request",
              "code": "NEUPAR",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "carpalTunnelSyndrome",
              "name": "",
              "type": "request",
              "code": "NEUCTS",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "cerebrovascularDisease",
              "name": "",
              "type": "request",
              "code": "NEUCER",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "dizziness",
              "name": "",
              "type": "request",
              "code": "NEUDUI",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "epilepsy",
              "name": "",
              "type": "request",
              "code": "NEUEPI",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "fainting",
              "name": "",
              "type": "request",
              "code": "NEUFLA",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "memoryDisorderDementia",
              "name": "",
              "type": "request",
              "code": "NEUGEH",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "headache",
              "name": "",
              "type": "request",
              "code": "NEUHOO",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "lowBackPainExclLrs",
              "name": "",
              "type": "request",
              "code": "NEULAG",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "peripheralPainSyndromesExclCts",
              "name": "",
              "type": "request",
              "code": "NEUPER",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "radicularSyndrome",
              "name": "",
              "type": "request",
              "code": "NEULRS",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "sensoryDisorderPolyneuropathy",
              "name": "",
              "type": "request",
              "code": "NEUSEN",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "sleepDisorders",
              "name": "",
              "type": "request",
              "code": "NEUSLA",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "suspectedMalignancy",
              "name": "",
              "type": "request",
              "code": "NEUVER",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "otherHealthcareRequestsNeurology",
              "name": "",
              "type": "request",
              "code": "NEUOVE",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            }
          ]
        },
        {
          "key": "ophthalmology",
          "name": "",
          "type": "node",
          "code": "OOG",
          "chapterClassification": "specialistcare",
          "items": [
            {
              "key": "cataract",
              "name": "",
              "type": "request",
              "code": "OOGCAT",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "contactLensProblems",
              "name": "",
              "type": "request",
              "code": "OOGCON",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "diabetesRelated",
              "name": "",
              "type": "request",
              "code": "OOGDIA",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "glaucoma",
              "name": "",
              "type": "request",
              "code": "OOGGLA",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "minorProceduresOpthalmology",
              "name": "",
              "type": "request",
              "code": "OOGKVO",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "ophthalmicDisordersChild",
              "name": "",
              "type": "request",
              "code": "OOGPED",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ],
              "age": ["Y"]
            },
            {
              "key": "redEye",
              "name": "",
              "type": "request",
              "code": "OOGROO",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "strabismusAndOrAmblyopia",
              "name": "",
              "type": "request",
              "code": "OOGSTR",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "traumaEyeOrEyelid",
              "name": "",
              "type": "request",
              "code": "OOGTRO",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "impairedVisionRefractiveErrors",
              "name": "",
              "type": "request",
              "code": "OOGVER",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "spotsFlash",
              "name": "",
              "type": "request",
              "code": "OOGVLE",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "otherHealthcareRequestsOphthalmology",
              "name": "",
              "type": "request",
              "code": "OOGOVE",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            }
          ]
        },
        {
          "key": "orthopedics",
          "name": "",
          "type": "node",
          "code": "ORT",
          "chapterClassification": "specialistcare",
          "items": [
            {
              "key": "jointDisorders",
              "name": "",
              "type": "node",
              "code": "ORTCATJOI",
              "items": [
                {
                  "key": "pelvicHipThigh",
                  "name": "",
                  "type": "request",
                  "code": "ORTBEK",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "elbow",
                  "name": "",
                  "type": "request",
                  "code": "ORTELL",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "ankleFoot",
                  "name": "",
                  "type": "request",
                  "code": "ORTENK",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "knee",
                  "name": "",
                  "type": "request",
                  "code": "ORTKNI",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "lowerBackSacrum",
                  "name": "",
                  "type": "request",
                  "code": "ORTLAG",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "neck",
                  "name": "",
                  "type": "request",
                  "code": "ORTNEK",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "wristHand",
                  "name": "",
                  "type": "request",
                  "code": "ORTPOL",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "shoulder",
                  "name": "",
                  "type": "request",
                  "code": "ORTSHD",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "thoracicSpine",
                  "name": "",
                  "type": "request",
                  "code": "ORTTHO",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "otherHealthcareRequestsJointDisorders",
                  "name": "",
                  "type": "request",
                  "code": "ORTOV1",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                }
              ]
            },
            {
              "key": "minorProceduresOrthopedics",
              "name": "",
              "type": "request",
              "code": "ORTKVO",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "pediatricOrthopedicDiseases",
              "name": "",
              "type": "node",
              "code": "ORTCATPED",
              "items": [
                {
                  "key": "limpingChild",
                  "name": "",
                  "type": "request",
                  "code": "ORTMAN",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "age": ["Y"]
                },
                {
                  "key": "scoliosis",
                  "name": "",
                  "type": "request",
                  "code": "ORTSCO",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "age": ["Y"]
                },
                {
                  "key": "suspectedHipDysplasia",
                  "name": "",
                  "type": "request",
                  "code": "ORTVHD",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "age": ["Y"]
                },
                {
                  "key": "otherHealthcareRequestsPediatricOrthopedicDiseases",
                  "name": "",
                  "type": "request",
                  "code": "ORTOV2",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "age": ["Y"]
                }
              ]
            },
            {
              "key": "traumatology",
              "name": "",
              "type": "request",
              "code": "ORTTRA",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "otherHealthcareRequestsOrthopedics",
              "name": "",
              "type": "request",
              "code": "ORTOV3",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            }
          ]
        },
        {
          "key": "plasticSurgery",
          "name": "",
          "type": "node",
          "code": "PCH",
          "chapterClassification": "specialistcare",
          "items": [
            {
              "key": "face",
              "name": "",
              "type": "node",
              "code": "PCHCATFAC",
              "items": [
                {
                  "key": "eyelids",
                  "name": "",
                  "type": "request",
                  "code": "PCHOOG",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "ears",
                  "name": "",
                  "type": "request",
                  "code": "PCHORE",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "otherHealthcareRequestsFace",
                  "name": "",
                  "type": "request",
                  "code": "PCHOV1",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                }
              ]
            },
            {
              "key": "abdomen",
              "name": "",
              "type": "request",
              "code": "PCHBUI",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "handWrist",
              "name": "",
              "type": "node",
              "code": "PCHCATHAN",
              "items": [
                {
                  "key": "carpalTunnelSyndromeWithAbbreviation",
                  "name": "",
                  "type": "request",
                  "code": "PCHCTS",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "dupuytren",
                  "name": "",
                  "type": "request",
                  "code": "PCHDUP",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "ganglion",
                  "name": "",
                  "type": "request",
                  "code": "PCHGNG",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "jointsAndLigaments",
                  "name": "",
                  "type": "request",
                  "code": "PCHGWL",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "postTrauma",
                  "name": "",
                  "type": "request",
                  "code": "PCHTRA",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "triggerfinger",
                  "name": "",
                  "type": "request",
                  "code": "PCHTRG",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "otherHealthcareRequestsHands",
                  "name": "",
                  "type": "request",
                  "code": "PCHOV3",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                }
              ]
            },
            {
              "key": "skin",
              "name": "",
              "type": "node",
              "code": "PCHCATHUI",
              "items": [
                {
                  "key": "benignOrMalignantSkinDisorders",
                  "name": "",
                  "type": "request",
                  "code": "PCHHUA",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "scars",
                  "name": "",
                  "type": "request",
                  "code": "PCHLIT",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "excessSkin",
                  "name": "",
                  "type": "request",
                  "code": "PCHOTH",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "wound",
                  "name": "",
                  "type": "request",
                  "code": "PCHWON",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "otherHealthcareRequestsSkin",
                  "name": "",
                  "type": "request",
                  "code": "PCHOV7",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                }
              ]
            },
            {
              "key": "Breasts",
              "name": "",
              "type": "node",
              "code": "PCHCATBRE",
              "items": [
                {
                  "key": "breastEnlargementOrReduction",
                  "name": "",
                  "type": "request",
                  "code": "PCHBVV",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "gender": "F"
                },
                {
                  "key": "prosthesisComplaints",
                  "name": "",
                  "type": "request",
                  "code": "PCHPRT",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "gender": "F"
                },
                {
                  "key": "otherHealthcareRequestsBreasts",
                  "name": "",
                  "type": "request",
                  "code": "PCHOV4",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "gender": "F"
                }
              ]
            },
            {
              "key": "otherHealthcareRequestsPlasticSurgery",
              "name": "",
              "type": "request",
              "code": "PCHOV6",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            }
          ]
        },
        {
          "key": "rheumatology",
          "name": "",
          "type": "node",
          "code": "REU",
          "chapterClassification": "specialistcare",
          "items": [
            {
              "key": "arthritides",
              "name": "",
              "type": "request",
              "code": "REUART",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "degenerativeDiseases",
              "name": "",
              "type": "request",
              "code": "REUDEG",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "inflammatoryBackProblems",
              "name": "",
              "type": "request",
              "code": "REUINF",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "osteoporosisBoneDiseases",
              "name": "",
              "type": "request",
              "code": "REUOST",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "rheumatologicalDisordersChild",
              "name": "",
              "type": "request",
              "code": "REUPED",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ],
              "age": ["Y"]
            },
            {
              "key": "systemDisorders",
              "name": "",
              "type": "request",
              "code": "REUSYS",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "softTissueDisorders",
              "name": "",
              "type": "request",
              "code": "REUWEK",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "otherHealthcareRequestsRheumatology",
              "name": "",
              "type": "request",
              "code": "REUOVE",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            }
          ]
        },
        {
          "key": "rehabilitation",
          "name": "",
          "type": "node",
          "code": "REV",
          "chapterClassification": "specialistcare",
          "items": [
            {
              "key": "musculoskeletalSystem",
              "name": "",
              "type": "node",
              "code": "REVCATMUS",
              "items": [
                {
                  "key": "upperExtremities",
                  "name": "",
                  "type": "request",
                  "code": "REVBOV",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "lowerExtremities",
                  "name": "",
                  "type": "request",
                  "code": "REVOND",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "spineTrunk",
                  "name": "",
                  "type": "request",
                  "code": "REVWVK",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "otherHealthcareRequestsMusculoskeletalSystem",
                  "name": "",
                  "type": "request",
                  "code": "REVOVB",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                }
              ]
            },
            {
              "key": "chronicPain",
              "name": "",
              "type": "request",
              "code": "REVCHR",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "pediatricRehabilitation",
              "name": "",
              "type": "request",
              "code": "REVPED",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ],
              "age": ["Y"]
            },
            {
              "key": "neurologicalDisorders",
              "name": "",
              "type": "node",
              "code": "REVCATNEU",
              "items": [
                {
                  "key": "brain",
                  "name": "",
                  "type": "request",
                  "code": "REVHER",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "peripheralNerves",
                  "name": "",
                  "type": "request",
                  "code": "REVPER",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "spinalCord",
                  "name": "",
                  "type": "request",
                  "code": "REVRUG",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "otherHealthcareRequestsRehabilitationNeurologicalDisorders",
                  "name": "",
                  "type": "request",
                  "code": "REVOVN",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                }
              ]
            },
            {
              "key": "otherHealthcareRequestsRehabilitation",
              "name": "",
              "type": "request",
              "code": "REVOVE",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            }
          ]
        },
        {
          "key": "sportsMedicine",
          "name": "",
          "type": "node",
          "code": "SPO",
          "chapterClassification": "specialistcare",
          "items": [
            {
              "key": "musculoskeletalDisorders",
              "name": "",
              "type": "request",
              "code": "SPOAAN",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "preventiveSportsMedicalExamination",
              "name": "",
              "type": "request",
              "code": "SPOPRE",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "rehabilitationOfSportsInjuries",
              "name": "",
              "type": "request",
              "code": "SPOREV",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "sportsMedicalSupport",
              "name": "",
              "type": "request",
              "code": "SPOSPO",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "decreasedExerciseTolerance",
              "name": "",
              "type": "node",
              "code": "SPOCATDEC",
              "items": [
                {
                  "key": "cardiac",
                  "name": "",
                  "type": "request",
                  "code": "SPOCAR",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "pulmonary",
                  "name": "",
                  "type": "request",
                  "code": "SPOPUL",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                },
                {
                  "key": "otherHealthcareRequestsDecreasedExerciseTolerance",
                  "name": "",
                  "type": "request",
                  "code": "SPOOV1",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ]
                }
              ]
            },
            {
              "key": "otherHealthcareRequestsSportsMedicine",
              "name": "",
              "type": "request",
              "code": "SPOOV2",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            }
          ]
        },
        {
          "key": "urology",
          "name": "",
          "type": "node",
          "code": "URO",
          "chapterClassification": "specialistcare",
          "items": [
            {
              "key": "disordersScrotumTestis",
              "name": "",
              "type": "request",
              "code": "UROAST",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ],
              "gender": "M"
            },
            {
              "key": "hematuria",
              "name": "",
              "type": "request",
              "code": "UROHEM",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "incontinenceProlapse",
              "name": "",
              "type": "request",
              "code": "UROINC",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "infertilityMan",
              "name": "",
              "type": "request",
              "code": "UROINF",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ],
              "gender": "M"
            },
            {
              "key": "colicUrolithiasis",
              "name": "",
              "type": "request",
              "code": "UROKOL",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "lowerUrinaryTractSymptoms",
              "name": "",
              "type": "request",
              "code": "UROLUT",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            },
            {
              "key": "sexualDysfunctionMaleImpotence",
              "name": "",
              "type": "request",
              "code": "UROSEK",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ],
              "gender": "M"
            },
            {
              "key": "sterilizationMan",
              "name": "",
              "type": "request",
              "code": "UROSTE",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ],
              "gender": "M"
            },
            {
              "key": "urinaryTractInfection",
              "name": "",
              "type": "node",
              "code": "UROCATURI",
              "items": [
                {
                  "key": "male",
                  "name": "",
                  "type": "request",
                  "code": "UROMAN",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "gender": "M"
                },
                {
                  "key": "female",
                  "name": "",
                  "type": "request",
                  "code": "UROVRO",
                  "typesOfCare": [
                    "SpecialistCare",
                    "Diagnostics",
                    "TeleConsultation"
                  ],
                  "licenses": [
                    "1", "2", "3", "4", "23"
                  ],
                  "productType": [
                    "DiagnosticTest",
                    "Teleconsult",
                    "CombinationAppointment",
                    "SpecificReferral",
                    "RegularReferral",
                    "UrgentReferral",
                    "ShortenedDeliveryTimeReferral",
                    "AdvisoryConsult"
                  ],
                  "gender": "F"
                }
              ]
            },
            {
              "key": "urologicalDisordersChild",
              "name": "",
              "type": "request",
              "code": "UROPED",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ],
              "age": ["Y"]
            },
            {
              "key": "elevatedPSA",
              "name": "",
              "type": "request",
              "code": "UROPSA",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ],
              "gender": "M"
            },
            {
              "key": "careRequestPenis",
              "name": "",
              "type": "request",
              "code": "UROPEN",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ],
              "gender": "M"
            },
            {
              "key": "otherHealthcareRequestsUrology",
              "name": "",
              "type": "request",
              "code": "UROOVE",
              "typesOfCare": [
                "SpecialistCare",
                "Diagnostics",
                "TeleConsultation"
              ],
              "licenses": [
                "1", "2", "3", "4", "23"
              ],
              "productType": [
                "DiagnosticTest",
                "Teleconsult",
                "CombinationAppointment",
                "SpecificReferral",
                "RegularReferral",
                "UrgentReferral",
                "ShortenedDeliveryTimeReferral",
                "AdvisoryConsult"
              ]
            }
          ]
        },
        {
          "key": "disabledCare",
          "name": "",
          "type": "request",
          "chapterClassification": "specialistcare",
          "code": "AVGOVE",
          "typesOfCare": [
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation"
          ],
          "licenses": [
            "1", "2", "3", "4", "23"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "radioTherapy",
          "name": "",
          "type": "request",
          "chapterClassification": "specialistcare",
          "code": "RTHOVE",
          "typesOfCare": [
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation"
          ],
          "licenses": [
            "1", "2", "3", "4", "23"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "nursingElderly",
          "name": "",
          "type": "request",
          "chapterClassification": "specialistcare",
          "code": "OUDOVG",
          "typesOfCare": [
            "SpecialistCare",
            "BasicCare",
            "TeleConsultation"
          ],
          "licenses": [
            "1", "2", "4", "23", "24"
          ],
          "productType": [
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "DeliveryRequest",
            "PlacementRequest",
            "ProcedureRequest",
            "AdvisoryConsult"
          ],
          "age": ["A", "S"]
        }
      ]
    },
    {
      "key": "paramedicalCare",
      "name": "",
      "type": "node",
      "code": "PAZ",
      "chapterClassification": "basiccare",
      "items": [
        {
          "key": "dietetics",
          "name": "",
          "type": "request",
          "code": "PAZDIE",
          "typesOfCare": [
            "BasicCare",
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation",
            "ParamedicalCare"
          ],
          "licenses": [
            "1", "2", "3", "4", "14", "23", "24"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "DeliveryRequest",
            "PlacementRequest",
            "ProcedureRequest",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "occupationalTherapy",
          "name": "",
          "type": "request",
          "code": "PAZERG",
          "typesOfCare": [
            "BasicCare",
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation",
            "ParamedicalCare"
          ],
          "licenses": [
            "1", "2", "3", "4", "14", "23", "24"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "DeliveryRequest",
            "PlacementRequest",
            "ProcedureRequest",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "physiotherapyAndExerciseTherapy",
          "name": "",
          "type": "request",
          "code": "PAZFOT",
          "typesOfCare": [
            "BasicCare",
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation",
            "ParamedicalCare"
          ],
          "licenses": [
            "1", "2", "3", "4", "14", "23", "24"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "DeliveryRequest",
            "PlacementRequest",
            "ProcedureRequest",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "skinTherapy",
          "name": "",
          "type": "request",
          "code": "PAZHUI",
          "typesOfCare": [
            "BasicCare",
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation",
            "ParamedicalCare"
          ],
          "licenses": [
            "1", "2", "3", "4", "14", "23", "24"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "DeliveryRequest",
            "PlacementRequest",
            "ProcedureRequest",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "speechTherapy",
          "name": "",
          "type": "request",
          "code": "PAZLOG",
          "typesOfCare": [
            "BasicCare",
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation",
            "ParamedicalCare"
          ],
          "licenses": [
            "1", "2", "3", "4", "14", "23", "24"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "DeliveryRequest",
            "PlacementRequest",
            "ProcedureRequest",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "optometryAndOrthoptics",
          "name": "",
          "type": "request",
          "code": "PAZOPT",
          "typesOfCare": [
            "BasicCare",
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation",
            "ParamedicalCare"
          ],
          "licenses": [
            "1", "2", "3", "4", "14", "23", "24"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "DeliveryRequest",
            "PlacementRequest",
            "ProcedureRequest",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "podotherapy",
          "name": "",
          "type": "request",
          "code": "PAZPOD",
          "typesOfCare": [
            "BasicCare",
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation",
            "ParamedicalCare"
          ],
          "licenses": [
            "1", "2", "3", "4", "14", "23", "24"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "DeliveryRequest",
            "PlacementRequest",
            "ProcedureRequest",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "obstetrics",
          "name": "",
          "type": "request",
          "code": "PAZVLK",
          "typesOfCare": [
            "BasicCare",
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation",
            "ParamedicalCare"
          ],
          "licenses": [
            "1", "2", "3", "4", "14", "23", "24"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "DeliveryRequest",
            "PlacementRequest",
            "ProcedureRequest",
            "AdvisoryConsult"
          ],
          "gender": "F"
        },
        {
          "key": "otherHealthcareRequestsParamedicalCare",
          "name": "",
          "type": "request",
          "code": "PAZOV5",
          "typesOfCare": [
            "BasicCare",
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation",
            "ParamedicalCare"
          ],
          "licenses": [
            "1", "2", "3", "4", "14", "23", "24"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "DeliveryRequest",
            "PlacementRequest",
            "ProcedureRequest",
            "AdvisoryConsult"
          ]
        }
      ]
    },
    {
      "key": "additionalCare",
      "name": "",
      "type": "node",
      "code": "AVZ",
      "chapterClassification": "basiccare",
      "items": [
        {
          "key": "lifestyleCoaching",
          "name": "",
          "type": "request",
          "code": "LIFCOA",
          "typesOfCare": [
            "AdditionalCare"
          ],
          "licenses": [
            "1", "2", "3", "4", "14", "18", "23", "24"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "DeliveryRequest",
            "PlacementRequest",
            "ProcedureRequest",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "pedicure",
          "name":  "",
          "type": "request",
          "code": "PDCURE",
          "typesOfCare": [
            "AdditionalCare"
          ],
          "licenses": [
            "1", "2", "3", "4", "14", "18", "23", "24"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "DeliveryRequest",
            "PlacementRequest",
            "ProcedureRequest",
            "AdvisoryConsult"
          ]
        }
      ]
    },
    {
      "key": "psychiatryMentalHealth",
      "name": "",
      "type": "node",
      "code": "PSY",
      "chapterClassification": "mentalHealth",
      "items": [
        {
          "key": "adaptationAndProcessingProblems",
          "name": "",
          "type": "request",
          "code": "PSYAVP",
          "typesOfCare": [
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation",
            "ParamedicalMHC"
          ],
          "licenses": [
            "1",
            "2",
            "3",
            "4",
            "15",
            "23",
            "32"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "adhd",
          "name": "",
          "type": "request",
          "code": "PSYADHD",
          "typesOfCare": [
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation",
            "ParamedicalMHC"
          ],
          "licenses": [
            "1",
            "2",
            "3",
            "4",
            "15",
            "23",
            "32"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "anxietyDisorders",
          "name": "",
          "type": "request",
          "code": "PSYANG",
          "typesOfCare": [
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation",
            "ParamedicalMHC"
          ],
          "licenses": [
            "1",
            "2",
            "3",
            "4",
            "15",
            "23",
            "32"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "autism",
          "name": "",
          "type": "request",
          "code": "PSYAUTI",
          "typesOfCare": [
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation",
            "ParamedicalMHC"
          ],
          "licenses": [
            "1",
            "2",
            "3",
            "4",
            "15",
            "23",
            "32"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "cognitiveImpairment",
          "name": "",
          "type": "request",
          "code": "PSYCOGN",
          "typesOfCare": [
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation",
            "ParamedicalMHC"
          ],
          "licenses": [
            "1",
            "2",
            "3",
            "4",
            "15",
            "23",
            "32"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "eatingDisorder",
          "name": "",
          "type": "request",
          "code": "PSYEETP",
          "typesOfCare": [
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation",
            "ParamedicalMHC"
          ],
          "licenses": [
            "1",
            "2",
            "3",
            "4",
            "15",
            "23",
            "32"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "behavorialDisorder",
          "name": "",
          "type": "request",
          "code": "PSYGEDR",
          "typesOfCare": [
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation",
            "ParamedicalMHC"
          ],
          "licenses": [
            "1",
            "2",
            "3",
            "4",
            "15",
            "23",
            "32"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "personalityProblems",
          "name": "",
          "type": "request",
          "code": "PSYPERS",
          "typesOfCare": [
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation",
            "ParamedicalMHC"
          ],
          "licenses": [
            "1",
            "2",
            "3",
            "4",
            "15",
            "23",
            "32"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "psychosis",
          "name": "",
          "type": "request",
          "code": "PSYPSYC",
          "typesOfCare": [
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation",
            "ParamedicalMHC"
          ],
          "licenses": [
            "1",
            "2",
            "3",
            "4",
            "15",
            "23",
            "32"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "psychotraumaPsychoTraumaticSymptoms",
          "name": "",
          "type": "request",
          "code": "PSYPSYT",
          "typesOfCare": [
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation",
            "ParamedicalMHC"
          ],
          "licenses": [
            "1",
            "2",
            "3",
            "4",
            "15",
            "23",
            "32"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "maritalAndFamilyProblems",
          "name": "",
          "type": "request",
          "code": "PSYREL",
          "typesOfCare": [
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation",
            "ParamedicalMHC"
          ],
          "licenses": [
            "1",
            "2",
            "3",
            "4",
            "15",
            "23",
            "32"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "sexualDisorder",
          "name": "",
          "type": "request",
          "code": "PSYSEP",
          "typesOfCare": [
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation",
            "ParamedicalMHC"
          ],
          "licenses": [
            "1",
            "2",
            "3",
            "4",
            "15",
            "23",
            "32"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "somatoformDisorder",
          "name": "",
          "type": "request",
          "code": "PSYSOMA",
          "typesOfCare": [
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation",
            "ParamedicalMHC"
          ],
          "licenses": [
            "1",
            "2",
            "3",
            "4",
            "15",
            "23",
            "32"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "moodDisorders",
          "name": "",
          "type": "request",
          "code": "PSYSTK",
          "typesOfCare": [
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation",
            "ParamedicalMHC"
          ],
          "licenses": [
            "1",
            "2",
            "3",
            "4",
            "15",
            "23",
            "32"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "addictionAndPsychiatry",
          "name": "",
          "type": "request",
          "code": "PSYVERP",
          "typesOfCare": [
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation",
            "ParamedicalMHC"
          ],
          "licenses": [
            "1",
            "2",
            "3",
            "4",
            "15",
            "23",
            "32"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "otherHealthcareRequestsMentalHealth",
          "name": "",
          "type": "request",
          "code": "PSYOVE",
          "typesOfCare": [
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation",
            "ParamedicalMHC"
          ],
          "licenses": [
            "1",
            "2",
            "3",
            "4",
            "15",
            "23",
            "32"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "AdvisoryConsult"
          ]
        }
      ]
    },
    {
      "key": "youthCare",
      "name": "",
      "type": "node",
      "code": "OPO",
      "chapterClassification": "basiccare",
      "items": [
        {
          "key": "cognitiveDevelopment",
          "name": "",
          "type": "request",
          "code": "OPOCOG",
          "typesOfCare": [
            "BasicCare",
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation"
          ],
          "licenses": [
            "1", "2", "3", "4", "23", "24", "32"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "DeliveryRequest",
            "PlacementRequest",
            "ProcedureRequest",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "familyAndEnvironmentProblems",
          "name": "",
          "type": "request",
          "code": "OPOGEZ",
          "typesOfCare": [
            "BasicCare",
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation"
          ],
          "licenses": [
            "1", "2", "3", "4", "23", "24", "32"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "DeliveryRequest",
            "PlacementRequest",
            "ProcedureRequest",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "educationalProblems",
          "name": "",
          "type": "request",
          "code": "OPOOOI",
          "typesOfCare": [
            "BasicCare",
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation"
          ],
          "licenses": [
            "1", "2", "3", "4", "23", "24", "32"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "DeliveryRequest",
            "PlacementRequest",
            "ProcedureRequest",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "problemsInParentChildRelationship",
          "name": "",
          "type": "request",
          "code": "OPOREL",
          "typesOfCare": [
            "BasicCare",
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation"
          ],
          "licenses": [
            "1", "2", "3", "4", "23", "24", "32"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "DeliveryRequest",
            "PlacementRequest",
            "ProcedureRequest",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "neglectAbuse",
          "name": "",
          "type": "request",
          "code": "OPOVMM",
          "typesOfCare": [
            "BasicCare",
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation"
          ],
          "licenses": [
            "1", "2", "3", "4", "23", "24", "32"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "DeliveryRequest",
            "PlacementRequest",
            "ProcedureRequest",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "otherHealthcareRequestsYouthCare",
          "name": "",
          "type": "request",
          "code": "OPOOVE",
          "typesOfCare": [
            "BasicCare",
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation"
          ],
          "licenses": [
            "1", "2", "3", "4", "23", "24", "32"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "DeliveryRequest",
            "PlacementRequest",
            "ProcedureRequest",
            "AdvisoryConsult"
          ]
        }
      ]
    },
    {
      "key": "nursingCareAndHomeCare",
      "name": "",
      "type": "node",
      "code": "VVT",
      "chapterClassification": "nursingCareAndHomeCare",
      "items": [
        {
          "key": "complexHealthProblems",
          "name": "",
          "type": "request",
          "code": "VVTCOM",
          "typesOfCare": [
            "BasicCare",
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation"
          ],
          "licenses": [
            "1", "2", "3", "4", "23", "24", "25"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "DeliveryRequest",
            "PlacementRequest",
            "CoordinationRequest",
            "ProcedureRequest",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "palliativeCare",
          "name": "",
          "type": "request",
          "code": "VVTPAL",
          "typesOfCare": [
            "BasicCare",
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation"
          ],
          "licenses": [
            "1", "2", "3", "4", "23", "24", "25"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "DeliveryRequest",
            "PlacementRequest",
            "CoordinationRequest",
            "ProcedureRequest",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "personalCare",
          "name": "",
          "type": "request",
          "code": "VVTPER",
          "typesOfCare": [
            "BasicCare",
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation"
          ],
          "licenses": [
            "1", "2", "3", "4", "23", "24", "25"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "DeliveryRequest",
            "PlacementRequest",
            "CoordinationRequest",
            "ProcedureRequest",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "clinicalNursing",
          "name": "",
          "type": "request",
          "code": "VVTSPE",
          "typesOfCare": [
            "BasicCare",
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation"
          ],
          "licenses": [
            "1", "2", "3", "4", "23", "24", "25"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "DeliveryRequest",
            "PlacementRequest",
            "CoordinationRequest",
            "ProcedureRequest",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "nursing",
          "name": "",
          "type": "request",
          "code": "VVTVER",
          "typesOfCare": [
            "BasicCare",
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation"
          ],
          "licenses": [
            "1", "2", "3", "4", "23", "24", "25"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "DeliveryRequest",
            "PlacementRequest",
            "CoordinationRequest",
            "ProcedureRequest",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "otherHealthcareRequestsNursingAndLiving",
          "name": "",
          "type": "request",
          "code": "VVTOVE",
          "typesOfCare": [
            "BasicCare",
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation"
          ],
          "licenses": [
            "1", "2", "3", "4", "23", "24", "25"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "DeliveryRequest",
            "PlacementRequest",
            "CoordinationRequest",
            "ProcedureRequest",
            "AdvisoryConsult"
          ]
        }
      ]
    },
    {
      "key": "stayAndLiving",
      "name": "",
      "type": "node",
      "code": "VBW",
      "chapterClassification": "stayAndLiving",
      "items": [
        {
          "key": "outpatientTreatment",
          "name": "",
          "type": "request",
          "code": "VBWDAG",
          "typesOfCare": [
            "BasicCare",
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation"
          ],
          "licenses": [
            "1", "2", "3", "4", "23", "24", "25"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "DeliveryRequest",
            "PlacementRequest",
            "CoordinationRequest",
            "ProcedureRequest",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "shortTermStay",
          "name": "",
          "type": "request",
          "code": "VBWKOR",
          "typesOfCare": [
            "BasicCare",
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation"
          ],
          "licenses": [
            "1", "2", "3", "4", "23", "24", "25"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "DeliveryRequest",
            "PlacementRequest",
            "CoordinationRequest",
            "ProcedureRequest",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "longTermStay",
          "name": "",
          "type": "request",
          "code": "VBWLAN",
          "typesOfCare": [
            "BasicCare",
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation"
          ],
          "licenses": [
            "1", "2", "3", "4", "23", "24", "25"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "DeliveryRequest",
            "PlacementRequest",
            "CoordinationRequest",
            "ProcedureRequest",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "otherHealthcareRequestsStayingAndLiving",
          "name": "",
          "type": "request",
          "code": "VBWOVE",
          "typesOfCare": [
            "BasicCare",
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation"
          ],
          "licenses": [
            "1", "2", "3", "4", "23", "24", "25"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "DeliveryRequest",
            "PlacementRequest",
            "CoordinationRequest",
            "ProcedureRequest",
            "AdvisoryConsult"
          ]
        }
      ]
    },
    {
      "key": "welfareServicesCourses",
      "name": "",
      "type": "node",
      "code": "WZD",
      "chapterClassification": "basiccare",
      "items": [
        {
          "key": "asthmaCOPD",
          "name": "",
          "type": "request",
          "code": "WZDAST",
          "typesOfCare": [
            "BasicCare",
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation"
          ],
          "licenses": [
            "1", "2", "3", "4", "23", "24"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "DeliveryRequest",
            "PlacementRequest",
            "ProcedureRequest",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "dementia",
          "name": "",
          "type": "request",
          "code": "WZDDEM",
          "typesOfCare": [
            "BasicCare",
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation"
          ],
          "licenses": [
            "1", "2", "3", "4", "23", "24"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "DeliveryRequest",
            "PlacementRequest",
            "ProcedureRequest",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "diabetesMellitus",
          "name": "",
          "type": "request",
          "code": "WZDDIA",
          "typesOfCare": [
            "BasicCare",
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation"
          ],
          "licenses": [
            "1", "2", "3", "4", "23", "24"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "DeliveryRequest",
            "PlacementRequest",
            "ProcedureRequest",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "cardiovascularDiseaseCvrm",
          "name": "",
          "type": "request",
          "code": "WZDHAR",
          "typesOfCare": [
            "BasicCare",
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation"
          ],
          "licenses": [
            "1", "2", "3", "4", "23", "24"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "DeliveryRequest",
            "PlacementRequest",
            "ProcedureRequest",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "cancer",
          "name": "",
          "type": "request",
          "code": "WZDKAN",
          "typesOfCare": [
            "BasicCare",
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation"
          ],
          "licenses": [
            "1", "2", "3", "4", "23", "24"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "DeliveryRequest",
            "PlacementRequest",
            "ProcedureRequest",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "lifestyleGeneral",
          "name": "",
          "type": "request",
          "code": "WZDLEE",
          "typesOfCare": [
            "BasicCare",
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation"
          ],
          "licenses": [
            "1", "2", "3", "4", "23", "24"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "DeliveryRequest",
            "PlacementRequest",
            "ProcedureRequest",
            "AdvisoryConsult"
          ]
        },
        {
          "key": "otherHealthcareRequestsWelfareAndDevices",
          "name": "",
          "type": "request",
          "code": "WZDOVE",
          "typesOfCare": [
            "BasicCare",
            "SpecialistCare",
            "Diagnostics",
            "TeleConsultation"
          ],
          "licenses": [
            "1", "2", "3", "4", "23", "24"
          ],
          "productType": [
            "DiagnosticTest",
            "Teleconsult",
            "CombinationAppointment",
            "SpecificReferral",
            "RegularReferral",
            "UrgentReferral",
            "ShortenedDeliveryTimeReferral",
            "DeliveryRequest",
            "PlacementRequest",
            "ProcedureRequest",
            "AdvisoryConsult"
          ]
        }
      ]
    },
    {
      "key": "assistiveDevices",
      "name": "",
      "type": "request",
      "chapterClassification": "basiccare",
      "code": "HMZOVE",
      "typesOfCare": [
        "BasicCare",
        "SpecialistCare",
        "Diagnostics",
        "TeleConsultation"
      ],
      "licenses": [
        "1", "2", "3", "4", "23", "24"
      ],
      "productType": [
        "DiagnosticTest",
        "Teleconsult",
        "CombinationAppointment",
        "SpecificReferral",
        "RegularReferral",
        "UrgentReferral",
        "ShortenedDeliveryTimeReferral",
        "DeliveryRequest",
        "PlacementRequest",
        "ProcedureRequest",
        "AdvisoryConsult"
      ]
    }
  ]
}

/* λ */

export interface HCR {
  key: string;
  name: string;
  type: string;
  code: string;
  typesOfCare?: string[];
  licenses?: string[];
  productType?: string[];
  items?: HCR[];
  chapterClassification?: string;
  age?: string[];
  gender?: string;
}

const renderNode = (i: HCR, isOpen: boolean): string => {
  //return `<div>${labels[i.key]} ${i.code}</div>`
  return `
    <details ${isOpen ? "open" : ""}>
      <summary>${labels[i.key]}</summary>
      <div>
	<div>${i.items ? i.items.map(item => renderNode(item, false)).reduce((pr,cr) => pr+cr) : ""}</div>
	<table class="small-table">
	  <tr><th>key</th><td>${i.key}</td></tr>
	  <tr><th>name</th><td>${i.name}</td></tr>
	  <tr><th>type</th><td>${i.type}</td></tr>
	  <tr><th>code</th><td>${i.code}</td></tr>
	  <tr><th>typesOfCare</th><td>${i.typesOfCare ?? ""}</td></tr>
	  <tr><th>licenses</th><td>${i.licenses ?? ""}</td></tr>
	  <tr><th>productType</th><td>${i.productType ?? ""}</td></tr>
	  <tr><th>chapterClassification</th><td>${i.chapterClassification ?? ""}</td></tr>
	  <tr><th>age</th><td>${i.age ?? ""}</td></tr>
	  <tr><th>gender</th><td>${i.gender ?? ""}</td></tr>
	</table>
      </div>     
    </details>`
}

const ren = (t: any) => {
  
  let h = /*html*/`            
            <div>${compute()}</div>
            <hr/>
            <label>healthcarerequests.json</label>
            <textarea id="tree-edit">${JSON.stringify(tree)}</textarea>
            <label>healthcarerequestlabels_nl.json</label>
            <textarea id="label-edit">${JSON.stringify(labels)}</textarea>
        `
  t.innerHTML = h

  let treeEdit = document.getElementById("tree-edit");
  if(treeEdit) {
    treeEdit.oninput = (e: Event) => onTreeEditInput(e, t)
  }

  let labelEdit = document.getElementById("label-edit");
  if(labelEdit) {
    labelEdit.oninput = (e: Event) => onLabelEditInput(e, t)
  }
  
}

const compute = ( ) =>  {
  return tree.items.map(item => renderNode(item, false)).reduce((pr, cr) => pr+cr)
}

const onLabelEditInput = (e: Event, t: any) => {
  if(e.target){
    // @ts-ignore
    labels = JSON.parse(e.target?.value)
    console.log(labels)
    ren(t);
  }
}

const onTreeEditInput = (e: Event, t: any) => {
  if(e.target){
    // @ts-ignore
    tree = JSON.parse(e.target?.value)
    console.log(tree)
    ren(t);
  }
}


class TreeView extends HTMLElement {  
  
  constructor() {
    super();
    ren(this);    
  }
}

customElements.define("tree-view", TreeView);



 
