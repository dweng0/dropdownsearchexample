// follow i18n standards by providing a 'default' translation object to translate from
export default {
    loading: "Loading Lord of the Rings text...",
    searchPlaceholder: "Search...",
    uploadText: "Upload text file",
    uploadOk: "",
    uploadWarning: "No text could be found in the file",
    initialDropDownText: "No text file has been uploaded",
    wordSelected: (word, pluralOr) => {
        return "You have selected ${word.name}, which has been used ${word.timesUsed} ${pluralOr}";
    }
};

//ou selected: {this.state.selectedWord.name}, which has been used  {this.state.selectedWord.timeUsed} {pluralOrSingularTime} </div>