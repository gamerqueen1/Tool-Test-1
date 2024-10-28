FRTool.loadData = function(data) {
    for (var i = 0; i < data.ModernPrimaryGeneList.length; i++) {
        new FRTool.ModernPrimaryGene(data.ModernPrimaryGeneList[i][0], data.ModernPrimaryGeneList[i][1], data.ModernPrimaryGeneList[i][2]);
    };

    for (var i = 0; i < data.ModernSecondaryGeneList.length; i++) {
        new FRTool.ModernSecondaryGene(data.ModernSecondaryGeneList[i][0], data.ModernSecondaryGeneList[i][1], data.ModernSecondaryGeneList[i][2]);
    };

    for (var i = 0; i < data.ModernTertiaryGeneList.length; i++) {
        new FRTool.ModernTertiaryGene(data.ModernTertiaryGeneList[i][0], data.ModernTertiaryGeneList[i][1], data.ModernTertiaryGeneList[i][2]);
    };

    for (var i = 0; i < data.GaolerPrimaryGeneList.length; i++) {
        new FRTool.GaolerPrimaryGene(data.GaolerPrimaryGeneList[i][0], data.GaolerPrimaryGeneList[i][1], data.GaolerPrimaryGeneList[i][2]);
    };

    for (var i = 0; i < data.GaolerSecondaryGeneList.length; i++) {
        new FRTool.GaolerSecondaryGene(data.GaolerSecondaryGeneList[i][0], data.GaolerSecondaryGeneList[i][1], data.GaolerSecondaryGeneList[i][2]);
    };

    for (var i = 0; i < data.GaolerTertiaryGeneList.length; i++) {
        new FRTool.GaolerTertiaryGene(data.GaolerTertiaryGeneList[i][0], data.GaolerTertiaryGeneList[i][1], data.GaolerTertiaryGeneList[i][2]);
    };

    for (var i = 0; i < data.BanescalePrimaryGeneList.length; i++) {
        new FRTool.BanescalePrimaryGene(data.BanescalePrimaryGeneList[i][0], data.BanescalePrimaryGeneList[i][1], data.BanescalePrimaryGeneList[i][2]);
    };

    for (var i = 0; i < data.BanescaleSecondaryGeneList.length; i++) {
        new FRTool.BanescaleSecondaryGene(data.BanescaleSecondaryGeneList[i][0], data.BanescaleSecondaryGeneList[i][1], data.BanescaleSecondaryGeneList[i][2]);
    };

    for (var i = 0; i < data.BanescaleTertiaryGeneList.length; i++) {
        new FRTool.BanescaleTertiaryGene(data.BanescaleTertiaryGeneList[i][0], data.BanescaleTertiaryGeneList[i][1], data.BanescaleTertiaryGeneList[i][2]);
    };

    for (var i = 0; i < data.VeilspunPrimaryGeneList.length; i++) {
        new FRTool.VeilspunPrimaryGene(data.VeilspunPrimaryGeneList[i][0], data.VeilspunPrimaryGeneList[i][1], data.VeilspunPrimaryGeneList[i][2]);
    };

    for (var i = 0; i < data.VeilspunSecondaryGeneList.length; i++) {
        new FRTool.VeilspunSecondaryGene(data.VeilspunSecondaryGeneList[i][0], data.VeilspunSecondaryGeneList[i][1], data.VeilspunSecondaryGeneList[i][2]);
    };

    for (var i = 0; i < data.VeilspunTertiaryGeneList.length; i++) {
        new FRTool.VeilspunTertiaryGene(data.VeilspunTertiaryGeneList[i][0], data.VeilspunTertiaryGeneList[i][1], data.VeilspunTertiaryGeneList[i][2]);
    };

    for (var i = 0; i < data.AberrationPrimaryGeneList.length; i++) {
        new FRTool.AberrationPrimaryGene(data.AberrationPrimaryGeneList[i][0], data.AberrationPrimaryGeneList[i][1], data.AberrationPrimaryGeneList[i][2]);
    };

    for (var i = 0; i < data.AberrationSecondaryGeneList.length; i++) {
        new FRTool.AberrationSecondaryGene(data.AberrationSecondaryGeneList[i][0], data.AberrationSecondaryGeneList[i][1], data.AberrationSecondaryGeneList[i][2]);
    };

    for (var i = 0; i < data.AberrationTertiaryGeneList.length; i++) {
        new FRTool.AberrationTertiaryGene(data.AberrationTertiaryGeneList[i][0], data.AberrationTertiaryGeneList[i][1], data.AberrationTertiaryGeneList[i][2]);
    };

    for (var i = 0; i < data.UndertidePrimaryGeneList.length; i++) {
        new FRTool.UndertidePrimaryGene(data.UndertidePrimaryGeneList[i][0], data.UndertidePrimaryGeneList[i][1], data.UndertidePrimaryGeneList[i][2]);
    };

    for (var i = 0; i < data.UndertideSecondaryGeneList.length; i++) {
        new FRTool.UndertideSecondaryGene(data.UndertideSecondaryGeneList[i][0], data.UndertideSecondaryGeneList[i][1], data.UndertideSecondaryGeneList[i][2]);
    };

    for (var i = 0; i < data.UndertideTertiaryGeneList.length; i++) {
        new FRTool.UndertideTertiaryGene(data.UndertideTertiaryGeneList[i][0], data.UndertideTertiaryGeneList[i][1], data.UndertideTertiaryGeneList[i][2]);
    };

    for (var i = 0; i < data.AetherPrimaryGeneList.length; i++) {
        new FRTool.AetherPrimaryGene(data.AetherPrimaryGeneList[i][0], data.AetherPrimaryGeneList[i][1], data.AetherPrimaryGeneList[i][2]);
    };

    for (var i = 0; i < data.AetherSecondaryGeneList.length; i++) {
        new FRTool.AetherSecondaryGene(data.AetherSecondaryGeneList[i][0], data.AetherSecondaryGeneList[i][1], data.AetherSecondaryGeneList[i][2]);
    };

    for (var i = 0; i < data.AetherTertiaryGeneList.length; i++) {
        new FRTool.AetherTertiaryGene(data.AetherTertiaryGeneList[i][0], data.AetherTertiaryGeneList[i][1], data.AetherTertiaryGeneList[i][2]);
    };

    for (var i = 0; i < data.SandsurgePrimaryGeneList.length; i++) {
        new FRTool.SandsurgePrimaryGene(data.SandsurgePrimaryGeneList[i][0], data.SandsurgePrimaryGeneList[i][1], data.SandsurgePrimaryGeneList[i][2]);
    };

    for (var i = 0; i < data.SandsurgeSecondaryGeneList.length; i++) {
        new FRTool.SandsurgeSecondaryGene(data.SandsurgeSecondaryGeneList[i][0], data.SandsurgeSecondaryGeneList[i][1], data.SandsurgeSecondaryGeneList[i][2]);
    };

    for (var i = 0; i < data.SandsurgeTertiaryGeneList.length; i++) {
        new FRTool.SandsurgeTertiaryGene(data.SandsurgeTertiaryGeneList[i][0], data.SandsurgeTertiaryGeneList[i][1], data.SandsurgeTertiaryGeneList[i][2]);
    };

    for (var i = 0; i < data.ColorList.length; i++) {
        new FRTool.Color(data.ColorList[i][0], data.ColorList[i][1]);
    };

    for (var i = data.BreedRuleList.length - 1; i >= 0; i--) {
        FRTool.BreedRoles[data.BreedRuleList[i][0]] = data.BreedRuleList[i][1];
    };

    for (var i = data.GeneRuleList.length - 1; i >= 0; i--) {
        FRTool.GeneRoles[data.GeneRuleList[i][0]] = data.GeneRuleList[i][1];
    };

    for (var i = 0; i < data.ModernBreedList.length; i++) {
        new FRTool.ModernBreed(data.ModernBreedList[i][0], data.ModernBreedList[i][1], data.ModernBreedList[i][2], data.ModernBreedList[i][3]);
    };

    for (var i = 0; i < data.AncientBreedList.length; i++) {
        new FRTool.AncientBreed(data.AncientBreedList[i][0], data.AncientBreedList[i][1], data.AncientBreedList[i][2], data.AncientBreedList[i][3]);
    };
};

FRTool.getColorRange = function(color1, color2) {
    if (color1 instanceof FRTool.Color && color2 instanceof FRTool.Color) {
        if (color1 == color2) {
            return [color1];
        };

        let temp1 = color1.rgbValues();
        let temp2 = color2.rgbValues();

        if (temp1[0] == temp2[0] && temp1[1] == temp2[1] && temp1[2] == temp2[2]) {
            return [color1];
        };

        let [r1, g1, b1] = temp1;
        let [r2, g2, b2] = temp2;

        let result = [];
        let stepCount = Math.max(Math.abs(r2 - r1), Math.abs(g2 - g1), Math.abs(b2 - b1));

        for (let i = 0; i <= stepCount; i++) {
            let r = r1 + ((r2 - r1) / stepCount) * i;
            let g = g1 + ((g2 - g1) / stepCount) * i;
            let b = b1 + ((b2 - b1) / stepCount) * i;

            result.push(new FRTool.Color(Math.round(r), Math.round(g), Math.round(b)));
        }

        return result;
    }
};

FRTool.getBreed = function(odds, isAncient) {
    let breedList = [];

    if (isAncient) {
        for (let breed in FRTool.BreedRoles) {
            if (FRTool.BreedRoles[breed][0] === odds) {
                breedList.push(breed);
            }
        }
    } else {
        for (let breed in FRTool.BreedRoles) {
            if (FRTool.BreedRoles[breed][1] === odds) {
                breedList.push(breed);
            }
        }
    }

    return breedList;
};

FRTool.getGene = function(odds, isAncient, type) {
    let geneList = [];

    if (isAncient) {
        for (let gene in FRTool.GeneRoles) {
            if (FRTool.GeneRoles[gene][0] === odds && FRTool.GeneRoles[gene][2] === type) {
                geneList.push(gene);
            }
        }
    } else {
        for (let gene in FRTool.GeneRoles) {
            if (FRTool.GeneRoles[gene][1] === odds && FRTool.GeneRoles[gene][2] === type) {
                geneList.push(gene);
            }
        }
    }

    return geneList;
};

FRTool.getGeneRate = function(gene1, gene2) {
    let geneRate = [0, 0];

    if (FRTool.GeneRoles[gene1] && FRTool.GeneRoles[gene2]) {
        geneRate[0] = FRTool.GeneRoles[gene1][0];
        geneRate[1] = FRTool.GeneRoles[gene2][0];
    }

    return geneRate;
};

FRTool.getBreedRate = function(breed1, breed2) {
    let breedRate = [0, 0];

    if (FRTool.BreedRoles[breed1] && FRTool.BreedRoles[breed2]) {
        breedRate[0] = FRTool.BreedRoles[breed1][0];
        breedRate[1] = FRTool.BreedRoles[breed2][0];
    }

    return breedRate;
};

FRTool.calRate = function(target1, target2, target3, isAncient) {
    let finalRate = 0;

    // Calculate breed compatibility
    if (target1 && target2) {
        let breedRate = FRTool.getBreedRate(target1.breed, target2.breed);
        finalRate += Math.max(breedRate[0], breedRate[1]);
    }

    // Calculate gene compatibility
    if (target1 && target2) {
        let geneRates = [
            FRTool.getGeneRate(target1.primaryGene, target2.primaryGene),
            FRTool.getGeneRate(target1.secondaryGene, target2.secondaryGene),
            FRTool.getGeneRate(target1.tertiaryGene, target2.tertiaryGene)
        ];

        finalRate += Math.max(geneRates[0][0], geneRates[0][1]);
        finalRate += Math.max(geneRates[1][0], geneRates[1][1]);
        finalRate += Math.max(geneRates[2][0], geneRates[2][1]);
    }

    // Check target3 attributes
    if (target3) {
        finalRate += target1.getAttributeScore(target3);
        finalRate += target2.getAttributeScore(target3);
    }

    return finalRate;
};
